json.array!(@tomes) do |tome|
  json.partial! "tome", tome: tome
end
