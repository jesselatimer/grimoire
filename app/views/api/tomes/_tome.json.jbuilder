json.(tome, :id, :title, :description, :canon, :cover_url, :author_name)
json.author tome.author, :id, :username if tome.author
