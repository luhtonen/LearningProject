require "data_mapper"

class Bookmark
  include DataMapper::Resource
  
  property :id, Serial
  property :url, String
  property :title, String
  property :created, Date
end
