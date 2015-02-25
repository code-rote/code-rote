class Snippet < ActiveRecord::Base
  # associations
  belongs_to :user
  has_many :steps

  def author
      user ? user.email : 'N/A'
  end

  def owned_by?(user)
      self.user_id == user.id
  end

end
