class CommentsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  
  def create
    @post = Post.find(params[:post_id])
    @comment = @post.comments.new(params[:comment])
    @comment.post_id = params[:post_id]
    
    respond_to do |format|
      if @comment.save
        format.js
      else
        format.js
      end
    end
  end
  
  make_resourceful do
    actions :all
    belongs_to :post
    
    response_for :index do |format|
      format.json {render :text => "{\"comment\": #{@current_objects.to_json}}", :content_type => 'application/json'}
    end
    
    response_for :update_fails do |format|
      format.json {render :json => {"success" => false, "errors" => @current_object.errors}, :status => 406}
    end
    
    response_for :update do |format|
      format.json {render :json => {"success" => true}}
    end
  end
end
