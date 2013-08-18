class CreateCommentsTable < ActiveRecord::Migration
  def change
     create_table :comments do |t|
      t.text :twaddle
      t.integer :post_id
      t.timestamps
    end
  end
end
