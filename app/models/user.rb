# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  name            :string
#  image_url       :string
#  canon           :string
#  bio             :text
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  before_validation :ensure_session_token
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validate :ensure_image_url, :ensure_bio
  attr_reader :password

  has_many :authored_tomes, class_name: :Tome, foreign_key: :author_id
  has_many :shelves, class_name: :Shelf
  has_many :shelvings, through: :shelves
  has_many :reviews, foreign_key: :author_id

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_image_url
    self.image_url ||= "http://i.imgur.com/f25DB.png"
  end

  def ensure_bio
    self.bio ||= "i'm a wizard"
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def reset_session_token!
    self.session_token = generate_session_token
    save!
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  protected
  def generate_session_token
    SecureRandom.urlsafe_base64
  end
end
