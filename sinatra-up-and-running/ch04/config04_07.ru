require 'sinatra/base'
require 'rack/mount'

class Get < Sinatra::Base
  get('/') { 'GET!' }
end

class Post < Sinatra::Base
  post('/') { 'POST!' }
end

Routes = Rack::Mount::RouteSet.new do |set|
  set.add_route Get, :request_method => 'GET'
  set.add_route Post, :request_method => 'POST'
end

run Routes
