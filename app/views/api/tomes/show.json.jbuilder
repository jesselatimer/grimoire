json.partial! "tome", tome: @tome
shelving = current_user.shelvings.find_by(tome_id: @tome.id)
if shelving
  json.shelving do
    json.(shelving, :id, :tome_id, :shelf_id)
  end
end
