# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150818162731) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "reviews", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.integer  "tome_id",    null: false
    t.string   "title"
    t.text     "body"
    t.integer  "rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "reviews", ["author_id", "tome_id"], name: "index_reviews_on_author_id_and_tome_id", unique: true, using: :btree
  add_index "reviews", ["author_id"], name: "index_reviews_on_author_id", using: :btree
  add_index "reviews", ["tome_id"], name: "index_reviews_on_tome_id", using: :btree

  create_table "shelves", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.string   "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "shelves", ["user_id"], name: "index_shelves_on_user_id", using: :btree

  create_table "shelvings", force: :cascade do |t|
    t.integer  "shelf_id",   null: false
    t.integer  "tome_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "shelvings", ["shelf_id"], name: "index_shelvings_on_shelf_id", using: :btree
  add_index "shelvings", ["tome_id"], name: "index_shelvings_on_tome_id", using: :btree

  create_table "tomes", force: :cascade do |t|
    t.string   "title",       null: false
    t.text     "description"
    t.string   "cover_url"
    t.string   "canon"
    t.string   "author_name"
    t.integer  "author_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "tomes", ["author_id"], name: "index_tomes_on_author_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "name"
    t.string   "image_url"
    t.string   "canon"
    t.text     "bio"
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
