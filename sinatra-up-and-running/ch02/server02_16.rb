require 'sinatra'

get '/home' do
  @users = ['Sally', 'Jerry', 'Rocko']
  erb :home02_16
end
