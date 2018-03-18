class Api::CommentsController < ApplicationController
  def create

  end

  def update
  end

  def destroy
  end

private

  def comment_params
    params.require(:comment).permit(:photo_id, :user_id, :content, :comment_parent_id)
  end

end
