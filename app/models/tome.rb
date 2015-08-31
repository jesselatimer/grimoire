# == Schema Information
#
# Table name: tomes
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text
#  cover_url   :string
#  canon       :string
#  author_name :string
#  author_id   :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  image600    :string
#  image300    :string
#  image75     :string
#

class Tome < ActiveRecord::Base
  validates :title, presence: true
  validate :ensure_cover_url, :ensure_description

  belongs_to :author, class_name: :User, foreign_key: :author_id
  has_many :shelvings
  has_many :shelves, through: :shelvings
  has_many :users, through: :shelves
  has_many :reviews

  def ensure_cover_url
    if self.cover_url == "" || nil
      self.cover_url = "http://res.cloudinary.com/dybv49bau/image/upload/v1441047491/grimoire_cover_by_hinatauzo9-d39xker_agfuas.png"
      self.image600 = "http://res.cloudinary.com/dybv49bau/image/upload/c_scale,w_600/v1441047491/grimoire_cover_by_hinatauzo9-d39xker_agfuas.png"
      self.image300 = "http://res.cloudinary.com/dybv49bau/image/upload/c_scale,w_300/v1441047491/grimoire_cover_by_hinatauzo9-d39xker_agfuas.png"
      self.image75 = "http://res.cloudinary.com/dybv49bau/image/upload/c_scale,w_75/v1441047491/grimoire_cover_by_hinatauzo9-d39xker_agfuas.png"
    end
  end

  def ensure_description
    if self.description == "" || nil
      self.description ||= "i'm a tome"
    end
  end
end
