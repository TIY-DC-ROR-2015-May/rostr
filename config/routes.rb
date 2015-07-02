Rails.application.routes.draw do
  resources :teams do
    member do
      post :reorder
    end
  end
end
