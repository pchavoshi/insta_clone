json.extract! @comment, :id, :user_id, :photo_id, :content
json.username @comment.user.username
