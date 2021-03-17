class Chatroom < ApplicationRecord
  has_many :messages

  def users
    messages.includes(:user).flat_map(&:user).uniq
  end
end
