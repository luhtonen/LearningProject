require 'sinatra/base'

require_relative 'main'
require_relative 'song'

map('/songs') { run SongController }
map('/') { run Website }
