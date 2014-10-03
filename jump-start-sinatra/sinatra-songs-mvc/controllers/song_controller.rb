class SongController < ApplicationController
  enable :method_override

  helpers SongHelpers

  configure :development do
    DataMapper.setup(:default, "sqlite3://#{Dir.pwd}/development.db")
  end

  configure :production do
    DataMapper.setup(:default, ENV['DATABASE_URL'])
  end

  get '/' do
    find_songs
    slim :songs
  end

  get '/new' do
    protected!
    @song = Song.new
    slim :new_song
  end

  get '/:id' do
    @song = find_song
    slim :show_song
  end

  get '/:id/edit' do
    protected!
    @song = find_song
    slim :edit_song
  end

  post '/' do
    protected!
    flash[:notice] = 'Song successfully added' if create_song
    redirect to("/#{@song.id}")
  end

  put '/:id' do
    protected!
    song = find_song
    if song.update(params[:song])
      flash[:notice] = 'Song successfully update'
    end
    redirect to("/#{song.id}")
  end

  delete '/:id' do
    protected!
    if find_song.destroy
      flash[:notice] = 'Song deleted'
    end
    redirect to('/')
  end

  post '/:id/like' do
    @song = find_song
    @song.likes = @song.likes.next
    @song.save
    redirect to "/#{@song.id}" unless request.xhr?
    slim :like, :layout => false
  end
end
