class Photo < ApplicationRecord

  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  validates :user_id, :image, presence: true

  belongs_to :user

  has_many :comments
  has_many :likes

  self.per_page = 10

end
