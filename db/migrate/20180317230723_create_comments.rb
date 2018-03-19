class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :photo_id, null: false
      t.integer :comment_parent_id
      t.integer :user_id, null: false
      t.text :content
      t.timestamps
    end
    add_index :comments, :photo_id
    add_index :comments, :comment_parent_id
    add_index :comments, :user_id
  end
end
