class SessionsController < ApplicationController
  skip_before_filter :require_logged_in, :except => [:destroy]

  def new
    @user = User.new
    render :new
  end

  def create
    username, password = user_params[:username], user_params[:password]
    @user = User.find_by_credentials(username, password)
    if @user
      login!(@user)
      redirect_to root_url
    else
      flash.now["errors"] = ["Invalid login information"]
      render :new
    end
  end

  def destroy
    logout!
    redirect_to new_user_url
  end
end
