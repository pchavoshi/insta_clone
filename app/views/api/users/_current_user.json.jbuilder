json.extract! user, :id, :username, :user_blurb, :image 
json.photo_ids user.photos.pluck(:id)
json.followings user.followings.pluck(:id)
json.followers user.followers.pluck(:id)
