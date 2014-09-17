require 'sinatra/base'
module Sinatra
  module GetAndPost
    def get_and_post(*args, &block)
      get(*args, &block)
      post(*args, &block)
    end
  end

  # this will only affect Sinatra::Application
  register GetAndPost
end

class MyApplication < Sinatra::Base
  register Sinatra::GetAndPost

  get_and_post '/' do
    "Thanks for your #{request.request_method} request."
  end

  run!
end
