Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

namespace :api, defaults: {format: :json} do
  resources :users, only: [:create, :show] do
    resources :follows, only: [:create, :destroy]
  end
  resource :session, only: [:create, :destroy]
  resources :photos, only: [:create, :destroy, :update, :show]
end

root to: "static_pages#root"

end
