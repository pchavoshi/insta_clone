json.photo do
json.extract! @photo, :id
end

json.user do
json.extract! @user, :id
end
