class User < ActiveRecord::Base
  
  # use bcrypt and ActiveModel has_secure_password
  has_secure_password


  # validations
  validates :email,
            uniqueness: true,
            confirmation: true
  
  validates :email_confirmation,
            format: {with: /.+@+/},
            presence: true,
            if: :email_conf_required?

  validates :password_confirmation,
            presence: true,
            length: {minimum: 8},
            # password must not be all lowercase letters
            format: {without: /\A[a-z]+\z/},
            if: :password_required?


  # associations
  has_many :snippets


  # class methods
  def self.confirm(email_param, password_param)
    user = User.find_by({email: email_param})
    user.try(:authenticate, password_param)
  end
  
  def password_required?
    self.new_record? or !self.password.nil?
  end

  def email_conf_required?
    self.new_record? or self.email_changed?
  end
end

