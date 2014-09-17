require 'sinatra/base'

class MyApplication < Sinatra::Base
  def self.get_and_post(*args, &block)
    get(*args, &block)
    post(*args, &block)
  end

  get_and_post '/' do
    "Thanks for your #{request.request_method} request."
  end

  run!
end
