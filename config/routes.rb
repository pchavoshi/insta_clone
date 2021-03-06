Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

namespace :api, defaults: {format: :json} do

  resources :users, only: [:create, :show] do
    resources :follows, only: [:create]
    resources :likes, only: [:create]

  end

  resource :session, only: [:create, :destroy]

  resources :photos, only: [:create, :destroy, :update, :show, :index] do
    resources :comments, only: [:create]
    resources :likes, only: [:create]
  end

  resources :comments, only: [:update, :destroy]
  delete '/users/:user_id/unfollow', to: 'follows#destroy'
  delete '/photos/:photo_id/unlike', to: 'likes#destroy'

end

root to: "static_pages#root"

end
