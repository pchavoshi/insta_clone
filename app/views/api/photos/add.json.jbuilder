json.extract! @photo, :id, :user_id, :caption, :image
json.comment_ids @photo.comments.pluck(:id)
