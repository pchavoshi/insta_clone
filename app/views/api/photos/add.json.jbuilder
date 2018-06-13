json.extract! @photo, :id, :user_id, :caption, :image
json.comment_ids @photo.comments.pluck(:id)
json.number_likes 0
json.current_user_likes false 
