class ChangeUser < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :session_token, :string
    change_column :users, :password_digest, :string
    change_column_null :users, :session_token, false
    change_column_null :users, :password_digest, false
    change_column_null :users, :username, false
    add_index :users, :username
    add_index :users, :session_token 
  end
end
