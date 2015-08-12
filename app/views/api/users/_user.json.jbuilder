json.(user, :id, :username, :bio, :canon, :image_url, :email)
json.authored_tomes user.authored_tomes unless user.authored_tomes.empty?
