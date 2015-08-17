# == Schema Information
#
# Table name: shelvings
#
#  id         :integer          not null, primary key
#  shelf_id   :integer          not null
#  tome_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Shelving < ActiveRecord::Base
  validates :tome, :shelf, presence: true
  belongs_to :tome
  belongs_to :shelf
  has_one :user, through: :shelf
end
