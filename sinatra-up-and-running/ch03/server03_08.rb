module MySinatra
  class Base
    def self.prototype
      @prototype ||= new
    end

    def self.call(env)
      dup.call!(env)
    end

    def call!(env)
      [200, {'Content-Type' => 'text/plain'}, ['routing logic not implemented']]
    end
  end

  class Application < Base
  end
end
