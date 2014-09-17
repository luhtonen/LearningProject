require 'sinatra'

before { halt 418, "I'm a very hot tea pot!\n" }
get ('/') { "You'll never get here!" }
