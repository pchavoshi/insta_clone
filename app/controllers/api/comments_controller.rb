class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update

    @comment = Comment.find(params[:id])
    @comment.update(comment_params)
    if @comment.save
      render 'api/comments/show'
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    render 'api/comments/show'
    @comment.destroy
  end

private

  def comment_params
    params.require(:comment).permit(:photo_id, :user_id, :content, :comment_parent_id)
  end

end
