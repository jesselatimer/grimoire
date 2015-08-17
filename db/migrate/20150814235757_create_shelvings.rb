class CreateShelvings < ActiveRecord::Migration
  def change
    create_table :shelvings do |t|
      t.integer :shelf_id, null: false, index: true
      t.integer :tome_id, null: false, index: true

      t.timestamps null: false
    end
  end
end
