require 'sinatra/base'

class MyApplication < Sinatra::Base
  def time
    Time.now.to_s
  end

  get('/') { "it's #{time}\n" }

  run!
end
