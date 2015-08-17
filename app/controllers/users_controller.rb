class UsersController < ApplicationController
  skip_before_filter :require_logged_in, :except => [:index]

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      @user.shelves.create!(title: "Read")
      @user.shelves.create!(title: "Currently Reading")
      @user.shelves.create!(title: "Want to Read")
      login!(@user)
      redirect_to root_url
    else
      flash.now["errors"] = @user.errors.full_messages
      render :new
    end
  end
end
