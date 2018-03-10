class Api::PhotosController < ApplicationController

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render  "api/photos/show"
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def update
    @photo = Photo.find(params[:id])

    if @photo.update(photo_params)
      render "api/photos/show"
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
    photo = Photo.find(params[:id])

    photo.destroy

  end

private

  def photo_params
    params.require(:photo).permit(:user_id, :caption)
  end

end
