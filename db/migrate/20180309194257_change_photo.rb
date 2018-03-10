class ChangePhoto < ActiveRecord::Migration[5.1]
  def change
    add_column :photos, :caption, :text 
  end
end
