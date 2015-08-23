json.(tome, :id, :title, :description, :canon, :cover_url, :image600, :image300, :image75, :author_name)
json.author tome.author, :id, :username if tome.author

num_ratings = tome.reviews.length
json.num_ratings num_ratings
unless tome.reviews.empty?
  scores = []
  json.reviews tome.reviews do |review|
    scores << review.rating
    json.(review, :id, :title, :body, :rating, :created_at)
    json.author review.author, :id, :username, :image75
  end
  json.avg_rating scores.sum / num_ratings
end
