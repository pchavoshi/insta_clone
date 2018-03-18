class Api::CommentsController < ApplicationController
  def create

  end

  def index
    @photo = Photo.find(params[:photo_id])
    render "api/comments/index"
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
