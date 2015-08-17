class Api::ShelvingsController < ApplicationController
  def create
    @shelving = Shelving.new(shelving_params)
    if @shelving.save
      render json: @shelving
    else
      render json: @shelving.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @shelving = Shelving.find(params[:id])
    @shelving.destroy!
    render json: @shelving
  end

  private
  def shelving_params
    params.require(:shelving).permit(:tome_id, :shelf_id)
  end
end
