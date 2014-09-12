require 'sinatra/base'

module Sinatra
  module MyExtensions
    module MyHelpers
      # helper methods go here
      def link(name)
        case name
          when :about then '/about'
          when :index then 'index'
          else "/page/#{name}"
        end
      end
    end

    # extension methods go here
    def post_get(route, &block)
      get(route, &block)
      post(route, &block)
    end

    def self.registered(app)
      app.helpers MyHelpers
    end
  end

  Sinatra.register MyExtensions
end
