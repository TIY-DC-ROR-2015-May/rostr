class AddRankToMemberships < ActiveRecord::Migration
  def change
    add_column :memberships, :rank, :integer
  end
end
