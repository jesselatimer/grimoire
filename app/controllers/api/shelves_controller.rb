class Api::ShelvesController < ApplicationController
  def create
    @shelf = Shelf.new(shelf_params)
    if @shelf.save
      render :show
    else
      render json: @shelf.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @shelf = Shelf.find(params[:id])
    render :show
  end

  def update
    @shelf = Shelf.find(params[:id])
    if @shelf.update(shelf_params)
      render :show
    else
      render json: @shelf.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @shelf = Shelf.find(params[:id])
    @shelf.destroy!
    render :show
  end

  private
  def shelf_params
    params.require(:shelf).permit(:user_id, :title)
  end
end
