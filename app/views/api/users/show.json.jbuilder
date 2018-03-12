
json.user do
  json.partial! 'api/users/current_user', user: @user 
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
