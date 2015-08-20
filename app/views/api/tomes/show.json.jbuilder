json.partial! "tome", tome: @tome

num_ratings = @tome.reviews.length
json.num_ratings num_ratings
unless @tome.reviews.empty?
  scores = []
  json.reviews @tome.reviews do |review|
    scores << review.rating
    json.(review, :id, :title, :body, :rating, :created_at)
    json.author review.author, :id, :username, :image_url
  end
  json.avg_rating scores.sum / num_ratings
end

shelving = current_user.shelvings.find_by(tome_id: @tome.id)
if shelving
  json.shelving do
    json.(shelving, :id, :tome_id, :shelf_id)
  end
end
