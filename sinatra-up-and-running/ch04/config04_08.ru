require 'sinatra/base'

class Foo < Sinatra::Base
  get('/foo') { 'foo' }
end

class Bar < Sinatra::Base
  get('/bar') { 'bar' }
end

class Routes < Sinatra::Base
  get('/foo') { Foo.call(env) }
  get('/bar') { Bar.call(env) }
end

run Routes
