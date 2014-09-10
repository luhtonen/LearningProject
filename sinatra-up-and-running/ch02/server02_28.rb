require 'sinatra'

configure do
  enable :sessions
end

before do
  content_type :txt
end

get '/set' do
  session[:foo] = Time.now
  "Session value set.\n"
end

get '/fetch' do
  "Session value: #{session[:foo]}\n"
end

get '/logout' do
  session.clear
  redirect '/fetch'
end
