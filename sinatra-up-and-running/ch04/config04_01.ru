require 'sinatra/base'

app = Sinatra.new do
  get('/') { 'Hello World!' }
end

run app
