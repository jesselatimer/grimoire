json.array! @reviews do |review|
  json.(review, :id, :title, :body, :rating, :created_at)
  json.author review.author, :id, :username, :image_url
  json.tome review.tome, :id, :title, :cover_url
end
