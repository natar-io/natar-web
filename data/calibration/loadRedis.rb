require "redis"

@redis = Redis.new

def read_to_redis(file, output_key)
  puts "Reading " + file.to_s
  content = File.read(file)
  puts "Set contents to " + output_key.to_s
  @redis.set(output_key, content)
end
  
# read_to_redis "cameraConfiguration.xml", "papart:cameraConfiguration"
read_to_redis "TouchColorCalibration.xml", "papart:touchColorCalib"
read_to_redis "ColorZoneCalibration.xml", "papart:colorZoneCalibration"
read_to_redis "Touch2DCalibration.xml", "papart:touchCalibration"
read_to_redis "Touch3DCalibration.xml", "papart:touch3DCalibration"

read_to_redis "HomographyCalibration.xml", "camera0:planeHomography"
read_to_redis "PlaneCalibration.xml", "camera0:plane"

# @redis.set("camera0:planeHomography", '{"matrix": [  -0.9998131990432739,  -0.017222585156559944,  0.008751560002565384,  -49.974708557128906,  -0.010321579873561859,  0.8591618537902832,  0.5115997195243835,  -33.4476318359375,  0.01633009873330593,  -0.5114138126373291,  0.8591790795326233,  720.4313354492188,  0,  0,  0,  1]}')

@redis.set("projector0:width", 1280)
@redis.set("projector0:height", 800)
(0..2).each {|i| read_to_redis "TouchCalibration#{i.to_s}.xml", "papart:touchCalibrations:#{i.to_s}"}
