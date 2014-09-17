require 'sinatra'

get '/' do
  halt [418, "I'm a hot tea pot!\n"]
  "You'll never get here!"
end
