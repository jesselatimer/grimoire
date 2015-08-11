Rails.application.routes.draw do
  root to: "users#index"

  resources :users, only: [:new, :create, :index]
  resource :session, only: [:new, :create, :destroy]
end
