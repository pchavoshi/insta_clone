json.follow do
json.extract! @follow, :follower_id, :followed_id
json.partial!
