class TeamsController < ApplicationController
  def show
    @team = Team.find params[:id]
  end

  def reorder
    binding.pry
  end
end