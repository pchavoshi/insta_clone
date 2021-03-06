
json.user do
  json.partial! 'api/users/current_user', user: @user
end

  unless @user.photos.empty?
    @user.photos.each do |photo|
      json.photos do
      json.set! photo.id do
        if photo.likes.include?(current_user.id)
          current_user_likes = true
        else
          current_user_likes = false
        end

        json.extract! photo, :id, :caption, :user_id, :image
        json.comment_ids photo.comments.pluck(:id)
        json.number_likes photo.likes.count
        json.current_user_likes current_user_likes
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
