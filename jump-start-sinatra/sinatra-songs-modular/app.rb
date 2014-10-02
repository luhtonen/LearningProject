require 'sinatra/base'
require 'slim'
require 'sass'
require 'sinatra/flash'
require 'pony'
require_relative 'sinatra/auth'
require 'v8'
require 'coffee-script'

class ApplicationController < Sinatra::Base
  register Sinatra::Auth
  register Sinatra::Flash

  configure do
    enable :sessions
  end

  before do
    set_title
  end

  def css(*stylesheets)
    stylesheets.map do |stylesheet|
      "<link href=\"/#{stylesheet}.css\" media=\"screen, projection\" rel=\"stylesheet\" />"
    end.join
  end

  def current?(path='/')
    (request.path==path || request.path==path+'/') ? 'current' : nil
  end

  def set_title
    @title ||= 'Songs by Sinatra'
  end

end
