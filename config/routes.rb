Rails.application.routes.draw do

  root to: 'sites#index'

  # site routes
  get '/', to: 'sites#index'
  get '/about', to: 'sites#about', as: 'about'
  get '/contact', to: 'sites#contact', as: 'contact'

  # session routes
  get '/signup', to: 'users#new', as: 'signup'
  resources :sessions, only: [:create, :destroy]
  get '/login', to: 'sessions#new', as: 'login'
  post '/login', to: 'sessions#create'
  delete '/sessions', to: 'sessons#destroy', as: 'logout'

  # user routes
  resources :users, except: [:index, :new]
  get '/profile', to: 'users#profile', as: 'profile'

  # step routes
  resources :steps

  # snippet routes
  resources :snippets
end

# Prefix Verb   URI Pattern                  Controller#Action
#         root GET    /                            sites#index
#              GET    /                            sites#index
#        about GET    /about(.:format)             sites#about
#      contact GET    /contact(.:format)           sites#contact
#       signup GET    /signup(.:format)            users#new
#     sessions POST   /sessions(.:format)          sessions#create
#      session DELETE /sessions/:id(.:format)      sessions#destroy
#        login GET    /login(.:format)             sessions#new
#              POST   /login(.:format)             sessions#create
#       logout DELETE /sessions(.:format)          sessons#destroy
#        users POST   /users(.:format)             users#create
#    edit_user GET    /users/:id/edit(.:format)    users#edit
#         user GET    /users/:id(.:format)         users#show
#              PATCH  /users/:id(.:format)         users#update
#              PUT    /users/:id(.:format)         users#update
#              DELETE /users/:id(.:format)         users#destroy
#      profile GET    /profile(.:format)           users#profile
#        steps GET    /steps(.:format)             steps#index
#              POST   /steps(.:format)             steps#create
#     new_step GET    /steps/new(.:format)         steps#new
#    edit_step GET    /steps/:id/edit(.:format)    steps#edit
#         step GET    /steps/:id(.:format)         steps#show
#              PATCH  /steps/:id(.:format)         steps#update
#              PUT    /steps/:id(.:format)         steps#update
#              DELETE /steps/:id(.:format)         steps#destroy
#     snippets GET    /snippets(.:format)          snippets#index
#              POST   /snippets(.:format)          snippets#create
#  new_snippet GET    /snippets/new(.:format)      snippets#new
# edit_snippet GET    /snippets/:id/edit(.:format) snippets#edit
#      snippet GET    /snippets/:id(.:format)      snippets#show
#              PATCH  /snippets/:id(.:format)      snippets#update
#              PUT    /snippets/:id(.:format)      snippets#update
#              DELETE /snippets/:id(.:format)      snippets#destroy