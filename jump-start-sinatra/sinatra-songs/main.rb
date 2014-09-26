require 'sinatra'
require 'slim'
require 'sass'
require './song'

configure do
  enable :sessions
end

get('/styles.css') { scss :styles }

get '/' do
  slim :home
end

get '/about' do
  @title = 'All About This Website'
  slim :about
end

get '/contact' do
  slim :contact
end

not_found do
  slim :not_found
end

get '/set/:name' do
  session[:name] = params[:name]
end

get '/get/hello' do
  "Hello #{session[:name]}"
end
