class CreateTomes < ActiveRecord::Migration
  def change
    create_table :tomes do |t|
      t.string :title, null: false
      t.text :description
      t.string :cover_url
      t.string :canon
      t.string :author_name
      t.integer :author_id, index: true

      t.timestamps null: false
    end
  end
end
