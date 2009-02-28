ActionController::Routing::Routes.draw do |map|
  map.resources :posts, :has_many => [:comments, :tags]
  
  # The priority is based upon order of creation: first created -> highest priority.
  
  map.resources :index
  
  # Admin
  map.admin '/admin', :controller => 'index', :action => 'admin'
  
  # Archive
  map.with_options :controller => 'posts' do |a|
    a.archive '/archive', :action => 'index'
    a.archive '/archive/:id', :action => 'show'
  end

  # Install the default routes as the lowest priority.
  # Note: These default routes make all actions in every controller accessible via GET requests. You should
  # consider removing the them or commenting them out if you're using named routes and resources.
  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
  
  # Default root
  map.root :controller => 'posts', :action => 'index'
end
