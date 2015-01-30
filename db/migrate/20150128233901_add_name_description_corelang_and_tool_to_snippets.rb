class AddNameDescriptionCorelangAndToolToSnippets < ActiveRecord::Migration
  def change
    add_column :snippets, :name, :string
    add_column :snippets, :description, :text
    add_column :snippets, :core_language, :string
    add_column :snippets, :tool, :string
  end
end
