require 'sinatra/base'
require 'ostruct'
require 'time'

class Blog < Sinatra::Base
  # File.expand_path generates an absolute path.
  # It also takes a path as second argument. The generated path
  # is treated as being relative to that path.
  set :root, File.expand_path('../../', __FILE__)

  # loop through all article files
  Dir.glob "#{root}/articles/*.md" do |file|
    # parse meta data and content from file
    meta, content = File.read(file).split("\n\n", 2)

    # generate a metadata object
    article = OpenStruct.new.YAML.load(meta)

    # convert the date to time object
    article.date = Time.parse article.date.to_s
  end
end
