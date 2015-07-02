require 'faker'

50.times do
  Player.create! name: Faker::Name.name
end

players = Player.all.to_a

Team.find_each do |team|
  players.sample(5).each do |player|
    team.players << player
  end
end