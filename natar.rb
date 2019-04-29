# @Author: PALARD Nicolas <nclsp>
# @Date:   2019-04-11T10:53:05+02:00
# @Email:  palard@rea.lity.tech
# @Project: Natar.io
# @Last modified by:   nclsp
# @Last modified time: 2019-04-25T14:23:02+02:00
# @Copyright: RealityTech 2018-2019

# coding: utf-8
require 'sinatra'
require 'sinatra/namespace'
require 'sinatra/partial'
require 'sinatra/reloader' if development?

require 'json'
require 'base64'

require 'date'

## WEB
require 'redis'

# Set the app accessible from local network,
set :bind, '0.0.0.0'

$redis = Redis.new


def default_titles
  @product_name = "Natar NX72"
  @title1 = "Welcome"
  @title2 = "User area"
end

get '/' do
  default_titles
  haml :index
end

get '/device' do
  default_titles
  @title2 = "Device configuration"
  haml :device
end

get '/tracking' do
  default_titles
  @title1 = "Control panel"
  @title2 = "Tracking & API"
  haml :tracking
end

get '/calibrations' do
  default_titles
  @title2 = "Calibrations"
  haml :calibrations
end

## GET/SET API
namespace '/redis' do
  get '/get/:key' do
    ## Camera DATA is encoded in Base64 for rendering in the browser.
    return Base64.encode64($redis.get(params[:key])) if params[:type] == "image"
    $redis.get(params[:key])
  end

  get '/set/:key/:value' do
    $redis.set(params[:key], params[:value])
  end

  get '/keys/:pattern' do
    pattern = params[:pattern]
    array = []
    $redis.scan_each(match: pattern) do |key|
          array.push(key)
    end
    array
  end

  get '/image-devices' do
    keys = $redis.keys('*')
    splitt = []
    keys.each do |key|
      entries = key.split(':')
      splitt.push(*entries)
    end
    # do stuff here
  end
end

## EYE command API
namespace '/service' do
  get '/info/:name' do
    j = "{}"
    if params[:name] == "all"
      j = `eye i -j`

      ## Only one list
      parsed = JSON.parse j
      @processes = parsed["subtree"][0]["subtree"][0]["subtree"]
      return haml :'partials/processes', :layout => false
    else
      j = `eye i #{params[:name]} -j`
    end
  end

  get '/:name/:action' do
    `eye #{params[:action]} #{params[:name]}`
  end

  ## Direct system API
  get '/load_configuration' do
    file = params[:file]
    output = params[:output]
    type = params[:type]

    cp = (File.read "apps/classpaths/apps.txt").strip
    `java -cp "#{cp}:apps/apps.jar" tech.lity.rea.nectar.apps.ConfigurationLoader -f "#{file}" -o "#{output}" #{type}`
  end
end

namespace '/system' do
  get '/packages' do
    package = Struct.new(:name, :version, :installed)

    packages=`pacman -Sl natar`
    pkg_array=packages.split('natar ')

    @list = []
    pkg_array.each do |pkg|
      infos = pkg.split(' ')
      name = infos[0]
      version = infos[1]
      next if name.nil? || version.nil?
      installed = infos.length == 3
      m_pkg = package.new(name, version, installed);
      @list.push(m_pkg);
    end
    haml :'partials/packages', :layout => false
  end

  get '/status' do
    @disk_usage = `df -h | awk '$NF=="/"{printf "%d;%d;%s", $3,$2,$5}'`
    @ram_usage = `free | awk 'NR==2{printf "%s;%s;%.2f%%", $3,$2,$3*100/$2 }'`
    @cpu_load = `mpstat | grep all | awk '{printf "%s", $(NF-9)}'`

    haml :'partials/system_status', :layout => false
  end

  get '/files/calibrations/list' do
    tree = `tree data/calibration -J`
    json = JSON.parse tree
    @json_tree = json[0]["contents"]
    @folder_name = "calibrations"
    haml :'partials/file_list', :layout => false
  end
  get '/files/markerboards/list' do
    tree = `tree data/markerboards -J`
    json = JSON.parse tree
    @json_tree = json[0]["contents"]
    @folder_name = "markerboards"
    haml :'partials/file_list', :layout => false
  end
end

## Shortcuts - camera0
get '/camera0/:action' do
  if params[:action] == "test"
    return `java -jar -Xmx64m apps/camera-server-test.jar --input camera0`
  end

  if params[:action] == "status"
    j = JSON.parse `eye info camera -j`
    return j["subtree"][0]["state"]
  end
  `eye #{params[:action]} camera`
end

## Used where ?
# `eye start camera_intrinsics` if request.include? "/nectar/camera0/intrinsics"
