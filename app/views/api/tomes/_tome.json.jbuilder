json.(tome, :id, :title, :description, :canon, :cover_url, :author_name)
json.author tome.author, :id, :username if tome.author
unless tome.reviews.empty?
  json.reviews tome.reviews do |review|
    json.(review, :id, :title, :body, :rating, :created_at)
    json.author review.author, :id, :username, :image_url
  end
end
