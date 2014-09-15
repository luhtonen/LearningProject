require 'sinatra/base'

class GeneralApp < Sinatra::Base
  get '/about' do
    'this is a general app'
  end
end

class CustomApp < GeneralApp
  get '/about' do
    'this is a custom app'
  end
end

# This route will also be available in CustomApp
GeneralApp.get '/' do
  "<a href='/about'>more infos</a>"
end

CustomApp.run!
