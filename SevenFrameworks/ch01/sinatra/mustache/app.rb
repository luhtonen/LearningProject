require "sinatra"
require "data_mapper"
require_relative "bookmark"
require "dm-serializer"
require "sinatra/respond_with"
require "sinatra/mustache"

DataMapper::setup(:default, "sqlite3://#{Dir.pwd}/bookmarks.db")
#DataMapper.finalize.auto_migrate!
DataMapper.finalize.auto_upgrade!

# get bookmark for edit
get "/bookmarks/:id" do
  id = params[:id]
  @bookmark = Bookmark.get(id)
  respond_with :bookmark_form_edit, @bookmark
end

# update bookmark
put "/bookmarks/:id" do
  id = params[:id]
  bookmark = Bookmark.get(id)
  input = params.slice "url", "title"
  bookmark.update input
  respond_to do |f|
    f.html { redirect "/" }
    f.json { 204 }
  end
end

# delete bookmark
delete "/bookmarks/:id" do
  id = params[:id]
  bookmark = Bookmark.get(id)
  bookmark.destroy
  respond_to do |f|
    f.html { redirect "/" }
    f.json { 200 }
  end
end

# create new bookmark
post "/bookmarks" do
  input = params.slice "url", "title"
  bookmark = Bookmark.create input
  respond_to do |f|
    f.html { redirect "/" }
    f.json { [201, "/bookmarks/#{bookmark['id']}"]}
  end
end

# get all bookmarks
get "/bookmarks" do
  @bookmarks = get_all_bookmarks
  respond_to do |f|
    f.html { mustache :bookmark_list }
    f.json { bookmarks.to_json }
  end
end

# main page
get "/" do
  @bookmarks = get_all_bookmarks
  mustache :bookmark_list # renders views/bookmark_list.mustache
end

# open new bookmark form
get "/bookmark/new" do
  mustache :bookmark_form_new
end

def get_all_bookmarks
  Bookmark.all(:order => :title)
end

class Hash
  def slice(*whitelist)
    whitelist.inject({}) {|result, key| result.merge(key => self[key])}
  end
end