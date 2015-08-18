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
  validates :author, :tome, presence: true
  validates :author_id, uniqueness: { scope: :tome_id }
  validate :ensure_rating_or_review
  belongs_to :author, class_name: :User
  belongs_to :tome

  def ensure_rating_or_review
    if body.nil? && rating.nil?
      errors.add(:rating, 'Need a review or rating.')
    end
  end
end
