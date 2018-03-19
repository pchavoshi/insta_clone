json.photo do
  json.set! @photo.id do
    json.extract! @photo, :id, :user_id, :caption, :image
    json.comment_ids @photo.comments.pluck(:id)
  end
end

json.comments do
  if @photo.comments.empty?
    json.null!
  else
    @photo.comments.each do |comment|
    next if comment.comment_parent_id != nil
      json.set! comment.id do
        json.extract! comment, :id, :user_id, :photo_id, :content
        json.child_comments do
          if comment.child_comments.empty?
            json.null!
          else
            comment.child_comments.each do |child_comment|
              json.set! child_comment.id do
                json.extract! child_comment, :id, :user_id, :photo_id, :content, :comment_parent_id
          end
          end
          end
        end
end
    end
  end
end
