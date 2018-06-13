class Api::LikesController < ApplicationController

  def create
    like = Like.new(like_params)
    if like.save
      @photo = Photo.find(like.photo_id)
      render "api/photos/likes"
    else
      render json: like.errors.full_messages, status: 422
    end
  end

  def destroy
    like = Like.find_by(photo_id: params[:like][:photo_id], user_id: params[:like][:user_id])
    like.destroy
    @photo = Photo.find(like.photo_id)
    render "api/photos/likes"
  end


def like_params
  params.require(:like).permit(:user_id, :photo_id)
end

end
