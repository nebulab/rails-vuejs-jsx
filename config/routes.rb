Rails.application.routes.draw do
  root 'products#index'

  resources :products, only: %i[index show] do
    resources :comments, only: %i[create]
  end

  namespace :api do
    resources :comments, only: :destroy
  end
end
