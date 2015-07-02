class TeamsController < ApplicationController
  def show
    @team = Team.find params[:id]
    #@players = @team.players
    @players = []
    @team.memberships.order(rank: :asc).each do |membership|
      @players.push membership.player
    end
  end

  def reorder
    team = Team.find params[:id]
    team.memberships.update_all rank: nil

    # player_id = [5, 23, 18, ...]
    params[:player_id].each_with_index do |player_id, index|
      # 5,0 ... 23,1 ... 18,2 ...
      m = team.memberships.find_by_player_id player_id
      m.update! rank: index
    end

    head :ok
  end
end