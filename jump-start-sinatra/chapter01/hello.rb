require 'sinatra'

get '/' do
  'Hello, Sinatra!'
end

get '/frank' do
  name = 'Frank'
  "Hello #{name}"
end
