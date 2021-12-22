class AddUserId < ActiveRecord::Migration[6.1]
  def change
    add_column :spells, :user_id, :integer, null: false
  end
end
