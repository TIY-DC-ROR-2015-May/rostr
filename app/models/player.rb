class Player < ActiveRecord::Base
  has_many :memberships
  has_many :teams, through: :memberships

  validates_presence_of :name
end
