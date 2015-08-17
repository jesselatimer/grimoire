class CreateShelves < ActiveRecord::Migration
  def change
    create_table :shelves do |t|
      t.integer :user_id, null: false, index: true
      t.string :title, null: false

      t.timestamps null: false
    end
  end
end
