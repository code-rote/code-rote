class AddCodeTermToSnippets < ActiveRecord::Migration
  def change
    add_column :snippets, :code_term, :string
  end
end
