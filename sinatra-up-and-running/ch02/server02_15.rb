require 'sinatra'
require 'haml'

get '/home' do
  @name = 'Random User'
  haml :home02_15
end
