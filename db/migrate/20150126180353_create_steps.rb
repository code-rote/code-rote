class CreateSteps < ActiveRecord::Migration
  def change
    create_table :steps do |t|
      t.string :name
      t.text :description
      t.string :type
      t.references :snippet, index: true

      t.timestamps null: false
    end
    add_foreign_key :steps, :snippets
  end
end
