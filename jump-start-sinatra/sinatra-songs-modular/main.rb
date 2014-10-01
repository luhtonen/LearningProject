require 'sinatra/base'
require 'slim'
require 'sass'
require 'sinatra/flash'
require 'pony'
require './sinatra/auth'
require 'v8'
require 'coffee-script'

class Website < Sinatra::Base
  register Sinatra::Auth
  register Sinatra::Flash

  configure do
    enable :sessions
  end

  configure :development do
    set :email_address => 'smtp.gmail.com',
        :email_user_name => 'edufinn',
        :email_password => 'secret',
        :email_domain => 'localhost.localdomain'
  end

  configure :production do
    set :email_address => 'smtp.sendgrid.net',
        :email_user_name => ENV['SENDGRID_USERNAME'],
        :email_password => ENV['SENDGRID_PASSWORD'],
        :email_domain => 'heroku.com'
  end

  before do
    set_title
  end

  def css(*stylesheets)
    stylesheets.map do |stylesheet|
      "<link href=\"/#{stylesheet}.css\" media=\"screen, projection\" rel=\"stylesheet\" />"
    end.join
  end

  def current?(path='/')
    (request.path==path || request.path==path+'/') ? 'current' : nil
  end

  def set_title
    @title ||= 'Songs By Sinatra'
  end

  def send_message
    Pony.mail(
      :from => params[:name] + '<' + params[:email] + '>',
      :to => 'edufinn@gmail.com',
      :subject => params[:name] + ' has contacted you',
      :body => params[:message],
      :via => :smtp,
      :via_options => {
        :address => settings.email_address,
        :port => '587',
        :enable_starttls_auto => true,
        :user_name => settings.email_user_name,
        :password => settings.email_password,
        :authentication => :plain,
        :domain => settings.email_domain
      }
    )
  end

  get('/styles.css') { scss :styles }
  get('/javascript/application.js') { coffee :application }

  get '/' do
    slim :home
  end

  get '/about' do
    @title = 'All About This Website'
    slim :about
  end

  get '/contact' do
    slim :contact
  end

  not_found do
    slim :not_found
  end

  post '/contact' do
    send_message
    flash[:notice] = "Thank you for your message. We'll be in touch soon."
    redirect to('/')
  end
end
