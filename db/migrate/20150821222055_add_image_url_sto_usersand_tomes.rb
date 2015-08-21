class AddImageUrlStoUsersandTomes < ActiveRecord::Migration
  def change
    add_column :users, :image600, :string
    add_column :users, :image300, :string
    add_column :users, :image75, :string

    add_column :tomes, :image600, :string
    add_column :tomes, :image300, :string
    add_column :tomes, :image75, :string
  end
end
