
json.user do
  json.set! @user.id do 
    json.extract! @user, :id, :username, :user_blurb
    json.photo_ids @user.photos.pluck(:id)
    json.followings @user.followings.pluck(:id)
    json.followers @user.followers.pluck(:id)
  end
end

json.photos do
  if @user.photos.empty?
    json.null!
  else
    @user.photos.each do |photo|
      json.set! photo.id do
        json.extract! photo, :id, :caption, :user_id
      end
    end
  end
end
