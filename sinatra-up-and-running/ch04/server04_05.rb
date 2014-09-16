require 'sinatra/base'

class Foo < Sinatra::Base
  get ('/foo') { 'foo' }
end

class Bar < Sinatra::Base
  get ('/bar') { 'bar' }

  use Foo
  run!
end
