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

ActiveRecord::Schema.define(version: 20150129221522) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "snippets", force: :cascade do |t|
    t.text     "snippet"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.string   "name"
    t.text     "description"
    t.string   "core_language"
    t.string   "tool"
    t.integer  "step_num"
    t.string   "code_term"
  end

  create_table "steps", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.string   "type"
    t.integer  "snippet_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "steps", ["snippet_id"], name: "index_steps_on_snippet_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_foreign_key "steps", "snippets"
end
