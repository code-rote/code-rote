Rails.application.routes.draw do

  root to: 'sites#index'

  # site routes
  get '/', to: 'sites#index'
  get '/about', to: 'sites#about', as: 'about'
  get '/contact', to: 'sites#contact', as: 'contact'
  get '/project', to: 'sites#project', as: 'project'

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