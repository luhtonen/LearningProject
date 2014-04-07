require 'sinatra'
require 'haml'

get '/' do
  haml :sample
end
