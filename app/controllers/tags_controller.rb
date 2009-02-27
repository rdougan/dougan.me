class TagsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  
  def create
    @post = Post.find(params[:post_id])
    @tag = @post.tags.new(params[:tag])
    @tag.post_id = params[:post_id]
    
    respond_to do |format|
      if @tag.save
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
      format.json {render :text => "{\"tag\": #{@current_objects.to_json}}", :content_type => 'application/json'}
    end
  end
end
