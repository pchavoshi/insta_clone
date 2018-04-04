
json.user do
  json.partial! 'api/users/current_user', user: @user
end

  unless @user.photos.empty?
    @user.photos.each do |photo|
      json.photos do
      json.set! photo.id do
        json.extract! photo, :id, :caption, :user_id, :image
        json.comment_ids photo.comments.pluck(:id)
      end
    end
    json.comments do
      unless photo.comments.empty?
      photo.comments.each do |comment|
          json.set! comment.id do
            json.extract! comment, :id, :user_id, :photo_id, :content
            json.username comment.user.username
          end
        end
      end
    end

  end
end
