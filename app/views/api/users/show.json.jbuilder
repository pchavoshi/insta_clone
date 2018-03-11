
json.user do
  json.extract! @user, :id, :username, :user_blurb
  json.photo_ids @user.photos.pluck(:id)
  json.followings @user.followings.pluck(:id)
  json.followers @user.followers.pluck(:id)
end

json.photos do
  @user.photos.each do |photo|
    json.set! photo.id do
      json.extract! photo, :id, :caption, :user_id
    end
  end
end
