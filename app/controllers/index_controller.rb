class IndexController < ApplicationController
  def index
    
  end
  
  def admin
    dir = "public/admin#{RAILS_ENV == 'production' ? '/public' : ''}"
    send_file "#{dir}/index.html", :disposition => 'inline', :filename => 'admin', :type => 'text/html'
  end
end
