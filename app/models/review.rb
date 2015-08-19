# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  tome_id    :integer          not null
#  title      :string
#  body       :text
#  rating     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ActiveRecord::Base
  validates :author, :tome, :rating, presence: true
  validates :author_id, uniqueness: { scope: :tome_id }
  belongs_to :author, class_name: :User
  belongs_to :tome
end
