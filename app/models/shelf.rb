# == Schema Information
#
# Table name: shelves
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Shelf < ActiveRecord::Base
  validates :user, :title, presence: true
  has_many :shelvings
  has_many :tomes, through: :shelvings
  belongs_to :user
end
