# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  twaddle    :text
#  post_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ActiveRecord::Base
  attr_accessible :twaddle
  belongs_to :post
end
