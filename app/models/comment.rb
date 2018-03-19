class Comment < ApplicationRecord

validates :photo_id, :user_id, presence: true

belongs_to :user
belongs_to :photo

belongs_to :parent_comment,
primary_key: :id,
foreign_key: :comment_parent_id,
class_name: :Comment,
optional: true

has_many :child_comments,
primary_key: :id,
foreign_key: :comment_parent_id,
class_name: :Comment 

end
