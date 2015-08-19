json.partial! "tome", tome: @tome
shelving = current_user.shelvings.find_by(tome_id: @tome.id)
if shelving
  json.shelving do
    json.(shelving, :id, :tome_id, :shelf_id)
  end
end
unless @tome.reviews.empty?
  json.reviews @tome.reviews do |review|
    json.(review, :id, :title, :body, :rating, :created_at)
    json.author review.author, :id, :username, :image_url
  end
end
