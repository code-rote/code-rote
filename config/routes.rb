Rails.application.routes.draw do
  root to: 'users#new'

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
