class Api::PhotosController < ApplicationController

  def index
    @photos = Photo.where(user_id: params[following_id])
    if @photos
      render "api/photos/index"
    else
      render json: ["Photos cannot be found"]
    end
  end 

  def show
    @photo = Photo.find(params[:id])
    if @photo
      render "api/photos/show"
    else
      render json: ["Photo cannot be found"]
    end
  end

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render  "api/photos/add"
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
    params.require(:photo).permit(:user_id, :caption, :image)
  end

end
