class Post < ApplicationRecord
	belongs_to :user
  after_commit { |post| ActionCable.server.broadcast 'posts', post: post, owner: post.user.email}

  scope :all_with_owner, -> {select("posts.*, users.email AS owner").joins(:user)}

end
