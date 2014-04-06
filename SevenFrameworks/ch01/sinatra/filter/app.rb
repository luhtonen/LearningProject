require "sinatra"
require "data_mapper"
require_relative "bookmark"
require "dm-serializer"

DataMapper::setup(:default, "sqlite3://#{Dir.pwd}/bookmarks.db")
DataMapper.finalize.auto_upgrade!

before "/bookmarks/:id" do |id|
  @bookmark = Bookmark.get(id)
  if !@bookmark
    halt 404, "bookmark #{id} not found"
  end
end

get "/bookmarks/:id" do
  content_type :json
  @bookmark.to_json
end

put "/bookmarks/:id" do
  input = params.slice "url", "title"
  if @bookmark.update input
    204 # No Content
  else
    400 # Bad Request
  end
end

delete "/bookmarks/:id" do
  if @bookmark.destroy
    200 # OK
  else
    500 # Internal Server Error
  end
end