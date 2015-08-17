json.(shelf, :id, :title, :user_id)
json.tomes shelf.tomes do |tome|
  json.partial! "api/tomes/tome", tome: tome
end
