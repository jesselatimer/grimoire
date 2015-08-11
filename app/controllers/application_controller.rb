class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :require_logged_in

  helper_method :current_user

  def current_user
    current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def require_logged_in
    unless current_user
      redirect_to new_session_url
    end
  end

  private
  # Defined here for use by UsersController and SessionsController
  def user_params
    params.require(:user).permit(:username, :password, :new_user)
  end
end
