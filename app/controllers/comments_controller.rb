class CommentsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  
  def create
    @post = Post.find(params[:post_id])
    @comment = @post.comments.new(params[:comment])
    @comment.post_id = params[:post_id]
    
    respond_to do |format|
      if @comment.save
        format.html { redirect_to @post }
        format.js
      else
        format.html { render :action => "new" }
        format.js
      end
    end
  end
  
  make_resourceful do
    actions :all
    belongs_to :post
    
    response_for :index do |format|
      format.html
      format.json {render :text => "{\"comment\": #{@current_objects.to_json}}", :content_type => 'application/json'}
    end
  end
end
