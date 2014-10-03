require 'sinatra/base'
require_relative 'lib/sinatra/auth'
Dir.glob('./{models,helpers,controllers}/*.rb').each { |file| require file }

map('/songs') { run SongController }
map('/') { run WebsiteController }
