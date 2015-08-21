json.(user, :id, :username, :bio, :canon, :image_url, :image600, :image300, :image75, :name)
json.authored_tomes user.authored_tomes unless user.authored_tomes.empty?
