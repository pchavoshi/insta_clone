class Api::SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if user
      render :show
    else
      render {}
      errors: "404"
    end
  end

  def destroy
    logout(current_user)
  end
end
