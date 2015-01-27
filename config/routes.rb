Rails.application.routes.draw do

  root to: 'sites#index'

  # site routes
  get '/', to: 'sites#index'
  get '/about', to: 'sites#about'
  get '/contact', to: 'sites#contact'

  # session routes
  get '/signup', to: 'users#new', as: 'signup'
  resources :sessions, only: [:create, :destroy]
  get '/login', to: 'sessions#new', as: 'login'
  post '/login', to: 'sessions#create'
  delete '/sessions', to: 'sessons#destroy', as: 'logout'

  # user routes
  resources :users, except: [:index, :new]
  get '/profile', to: 'users#profile'
end
