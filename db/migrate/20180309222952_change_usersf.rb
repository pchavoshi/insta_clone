class ChangeUsersf < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :user_blurb, :text 
  end
end
