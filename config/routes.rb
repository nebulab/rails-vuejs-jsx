Rails.application.routes.draw do
  root 'products#index'

  resources :products, only: %i[index show]

  namespace :api do
    resources :comments, only: :destroy

    resources :products, only: [] do
      resources :comments, only: :create
    end
  end
end
