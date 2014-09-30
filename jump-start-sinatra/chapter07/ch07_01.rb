require 'sinatra/base'

class ModularApp < Sinatra::Base
  set :name, 'Modular App'
  get '/' do
    "Hello from #{settings.name}"
  end

  run! if __FILE__ == $0
end
