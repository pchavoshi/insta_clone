json.follow do
json.extract! @follow, :followed_id
end

json.user do
json.partial! 'api/users/current_user', user: @user
end #can this just be the users id instead of the whole user partial 
