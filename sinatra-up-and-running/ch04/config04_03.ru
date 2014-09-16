require 'sinatra/base'

words = %w[foo bar blah]

words.each do |word|
  # generate a new application for each word
  map "/#{word}" do
    run Sinatra.new { get('/') { word }}
  end
end

map '/' do
  app = Sinatra.new do
    get '/' do
      list = words.map do |word|
        "<a href='/#{word}'>#{word}</a>"
      end
      list.join('<br>')
    end
  end

  run app
end
