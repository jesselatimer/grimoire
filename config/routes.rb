Rails.application.routes.draw do
  root to: "static_pages#root"

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :update]
    resources :tomes, only: [:index, :show, :create, :update]
    resources :shelves, only: [:show, :create, :update, :destroy]
    resources :shelvings, only: [:create, :destroy]
    resources :reviews, only: [:create, :update, :destroy]
  end
end
