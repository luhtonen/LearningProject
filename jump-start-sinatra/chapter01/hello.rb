require 'sinatra'
require 'sinatra/reloader' if development?

get '/' do
  'Hello, Sinatra!'
end

get '/frank' do
  name = 'Frank'
  "Hello #{name}"
end

get '/:name' do
  name = params[:name]
  "Hi there #{name}!"
end
