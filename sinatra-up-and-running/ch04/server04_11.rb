require 'sinatra/base'

class Foo < Sinatra::Base
  get('/') { 'Hello from foo!' }
end

class Bar < Sinatra::Base
  get('/') { Foo.call(env) }
end

Bar.run!
