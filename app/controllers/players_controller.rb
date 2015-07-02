class PlayersController < ApplicationController
  def update
    p = Player.find params[:id]
    p.update! name: params[:name]
    head :ok
  end
end