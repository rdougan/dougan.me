set :application, "dougan.me"
set :deploy_to, "/var/www/apps/#{application}"

default_run_options[:pty] = true
set :use_sudo, true

set :user, "deploy"
set :runner, user

role :app, application
role :web, application
role :db, application, :primary => true

set :scm, "git"
set :repository,  "git://github.com/rdougan/dougan.me.git"
set :branch, "master"

namespace :deploy do
  desc "Restart Application"
  task :restart do
    run "touch #{current_path}/tmp/restart.txt"
  end
  
  task :symlink_shared do
    run "ln -nfs #{shared_path}/config/database.yml #{release_path}/config/database.yml"
  end
end

after "deploy:update_code", "deploy:symlink_shared"
after :deploy, "deploy:restart"