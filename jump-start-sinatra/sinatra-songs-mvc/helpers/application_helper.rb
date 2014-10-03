module ApplicationHelpers
  def css(*stylesheets)
    stylesheets.map do |stylesheet|
      "<link href=\"/#{stylesheet}.css\" media=\"screen, projection\" rel=\"stylesheet\" />"
    end.join
  end

  def current?(path='/')
    (request.path==path || request.path==path+'/') ? 'current' : nil
  end

  def set_title
    @title ||= 'Songs by Sinatra'
  end
end
