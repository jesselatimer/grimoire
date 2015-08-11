# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string
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

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_image_url
    self.image_url ||= "http://www.askawizard.biz/attachments/Image/Wizard-Trans-Left_5.png?1393893783539"
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
