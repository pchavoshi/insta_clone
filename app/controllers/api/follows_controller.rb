class Api::FollowsController < ApplicationController

  def create
    debugger
    follow = Follow.new(follow_params)
    if follow.save
      @user = User.find(follow.followed_id)
      render "api/users/show"
    else
      render json: follow.errors.full_messages, status: 422
    end
  end

  def destroy
    debugger
    follow = Follow.find(params[:follow][:follower_id], params[:follow][:followed_id])
    follow.destroy
  end

private

def follow_params
  params.require(:follow).permit(:follower_id, :followed_id)
end

end
