## Natar Web admin

### Installation

## Dependencies

#### System parts
* sysstat

#### Javascript parts
* [deployment] nginx(`pacman -S nginx`, `gem install unicorn`)
* `npm install --save-dev webpack`
* `npm install`

#### Ruby parts
* `gem install bundler`
* `bundle install `

## Run

* `bundle install`
* `yarn install`
* `forman start`

The server is then managed by `eye` and `systemd`. 


### Build the package


`bundle install --deployment`
