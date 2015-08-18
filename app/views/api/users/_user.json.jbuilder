json.(user, :id, :username, :bio, :canon, :image_url, :name)
json.authored_tomes user.authored_tomes unless user.authored_tomes.empty?
json.authored_reviews user.reviews unless user.reviews.empty?
