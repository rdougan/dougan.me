ActionController::Routing::Routes.draw do |map|
  # restful_authentication
  map.logout '/logout', :controller => 'sessions', :action => 'destroy'
  map.login '/login', :controller => 'sessions', :action => 'new'
  map.register '/register', :controller => 'users', :action => 'create'
  map.signup '/signup', :controller => 'users', :action => 'new'
  
  map.resources :users
  map.resource :session
  
  map.resources :posts, :has_many => [:comments, :tags]
  map.resources :comments
  map.resources :tags
  
  # The priority is based upon order of creation: first created -> highest priority.
  
  map.resources :index
  map.resources :portfolio
  
  # Admin
  map.admin '/acp', :controller => 'index', :action => 'admin'
  
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
