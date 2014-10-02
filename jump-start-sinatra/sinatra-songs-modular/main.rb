require_relative 'app'
require_relative 'asset-handler'

class Website < ApplicationController
  use AssetHandler

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
