class PostsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  before_filter :login_required, :except => [:show, :index]
  
  make_resourceful do
    actions :all
    
    response_for :index do |format|
      format.html
      format.json {render :text => "{\"post\": #{@current_objects.to_json}}", :content_type => 'application/json'}
    end
    
    response_for :show do |format|
      format.html
      format.json {render :json => {"post" => [@current_object]}.to_json}
    end
    
    response_for :update_fails, :create_fails do |format|
      format.json {render :json => {"success" => false, "errors" => @current_object.errors}, :status => 406}
    end
    
    response_for :update, :create do |format|
      format.html {render :json => {"success" => true}}
      format.json {render :json => {"success" => true}}
    end
  end
end