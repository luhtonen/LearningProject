require 'sinatra/base'

class Get < Sinatra::Base
  get('/') { 'GET!' }
end

class Post < Sinatra::Base
  post('/') { 'POST!' }
end

class Routes < Sinatra::Base
  get('/') { Get.call(env) }
  post('/') { Post.call(env) }
end

run Routes
