class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render 'api/comments/add'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update

    @comment = Comment.find(params[:id])
    if @comment.save
      render 'api/comments/add'
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
  end

private

  def comment_params
    params.require(:comment).permit(:photo_id, :user_id, :content, :comment_parent_id)
  end

end
