class Post < ActiveRecord::Base
  has_many :comments
  has_many :tags
  
  validates_presence_of :title, :body
end
