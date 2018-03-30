
    @photos.each do |photo|

      json.photos do
      json.set! photo.id do
        json.extract! photo, :id, :caption, :user_id, :image
        json.comment_ids photo.comments.pluck(:id)
      end
    end

    json.users do















s








      302
      json.set! photo.user_id do
        photo.user
      end
    end

    json.comments do
      photo.comments.each do |comment|
        json.set! comment.id do
          json.extract! comment, :id, :user_id, :photo_id, :content
      end
    end
  end

  end
