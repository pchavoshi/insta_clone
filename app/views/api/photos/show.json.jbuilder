json.photo do
  json.set! @photo.id do
    json.extract! @photo, :id, :user_id, :caption, :image
  end
end

json.comments do
  if @photo.comments.empty?
    json.null!
  else
    @photo.comments.each do |comment|
      json.set! comment.id do
        json.extract! comment, :id, :user_id, :photo_id, :content, :comment_parent_id
      end
    end
  end
end
