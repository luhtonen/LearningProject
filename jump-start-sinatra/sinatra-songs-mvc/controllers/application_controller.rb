require 'slim'
require 'sass'
require 'sinatra/flash'
require 'pony'
require 'v8'
require 'coffee-script'

class ApplicationController < Sinatra::Base
  register Sinatra::Auth
  register Sinatra::Flash

  helpers ApplicationHelpers

  configure do
    enable :sessions
    set :views, File.dirname(__FILE__) + '/../views'
    set :public_folder, File.dirname(__FILE__) + '/../public'
  end

  before do
    set_title
  end
end
