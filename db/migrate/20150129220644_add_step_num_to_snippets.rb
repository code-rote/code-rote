class AddStepNumToSnippets < ActiveRecord::Migration
  def change
    add_column :snippets, :step_num, :integer
  end
end
