# == Schema Information
#
# Table name: tomes
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text
#  cover_url   :string
#  canon       :string
#  author_id   :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Tome < ActiveRecord::Base
  validates :title, presence: true
  validate :ensure_cover_url, :ensure_description

  belongs_to :author, class_name: :User, foreign_key: :author_id

  def ensure_cover_url
    self.cover_url ||= "http://www.clipartpal.com/_thumbs/pd/education/large_open_book.png"
  end

  def ensure_description
    self.description ||= "i'm a tome"
  end
end
