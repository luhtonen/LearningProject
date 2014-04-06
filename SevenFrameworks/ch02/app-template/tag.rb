require "data_mapper"

class Tag
    include DataMapper::Resource

    property :id, Serial
    property :label, String, :require => true

    has n, :taggings
    has n, :bookmarks, :through => :taggings, :order => [:title.asc]
end