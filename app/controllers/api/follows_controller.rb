class Api::FollowsController < ApplicationController

  def create
    follow = Follow.new(follow_params)
    if follow.save
      @user = User.find(follow.followed_id)
      render "api/users/show"
    else
      render json: follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find_by(follower_id: params[:follow][:follower_id], followed_id: params[:follow][:followed_id])
    @follow.destroy
    @user = User.find(params[:user_id])
    render "api/follows/show"
  end

private

def follow_params
  params.require(:follow).permit(:follower_id, :followed_id)
end

end
