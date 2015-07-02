class Membership < ActiveRecord::Base
  belongs_to :player
  belongs_to :team

  validates_uniqueness_of :rank, scope: :team
  validates_uniqueness_of :player, scope: :team
end
