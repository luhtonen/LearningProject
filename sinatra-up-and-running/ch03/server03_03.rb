require 'sinatra'
require_relative 'sinatra/link_helper'

get '/' do
  erb :helper_test
end

get '/index' do
  'This is index'
end

get '/about' do
  'This is about'
end

get '/page/:name' do
  "This is page with name: #{params[:name]}"
end
