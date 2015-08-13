class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false, index: true, unique: true
      t.string :name
      t.string :image_url
      t.string :canon
      t.text   :bio

      t.string :password_digest, null: false
      t.string :session_token, null: false, index: true

      t.timestamps null: false
    end
  end
end
