Rails.application.routes.draw do
  resources :teams do
    post :reorder
  end
end
