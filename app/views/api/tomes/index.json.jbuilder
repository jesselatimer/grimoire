json.array!(@tomes) do |tome|
  json.(tome, :id, :title, :description, :canon, :cover_url)
  json.author tome.author
end
