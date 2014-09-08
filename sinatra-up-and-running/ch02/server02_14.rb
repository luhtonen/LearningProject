require 'sinatra'

get '/home' do
  @name = 'Random User'
  erb :home02_14
end
