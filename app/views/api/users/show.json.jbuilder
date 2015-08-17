json.partial! "user", user: @user
json.shelves @user.shelves do |shelf|
  json.partial! "api/shelves/shelf", shelf: shelf
end
