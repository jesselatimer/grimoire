class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false, index: true
      t.integer :tome_id, null: false, index: true

      t.string  :title
      t.text    :body
      t.integer :rating

      t.timestamps null: false
    end

    add_index :reviews, [:author_id, :tome_id], unique: true
  end
end
