class Api::FollowsController < ApplicationController

  # def create
  #   follow = Follow.new(follow_params)
  #   if follow
  #     render "api/users/show"
  #   else
  #     render json: follow.errors.full_messages, status: 422
  #   end
  # end

  # def destroy
  #   follow = Follow.find(params[:])
  # end

private

def follow_params
  params.require(:follow).permit(:follower_id, :followed_id)
end

end