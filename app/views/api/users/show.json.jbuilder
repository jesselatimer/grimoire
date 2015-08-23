json.partial! "user", user: @user
json.shelves @user.shelves do |shelf|
  json.partial! "api/shelves/shelf", shelf: shelf
end

json.num_reviews @user.reviews.length
unless @user.reviews.empty?
  json.reviews @user.reviews do |review|
    json.(review, :id, :title, :body, :rating, :created_at)
    json.tome review.tome, :id, :title, :image75
  end
end
