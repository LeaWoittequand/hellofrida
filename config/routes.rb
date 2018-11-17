Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  resources :subscriptions, only: :create
end
