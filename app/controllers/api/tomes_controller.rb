class Api::TomesController < ApplicationController
  def index
    @tomes = Tome.all
    render :index
  end

  def show
    @tome = Tome.find(params[:id])
    render :show
  end

  def create
    @tome = Tome.new(tome_params)
    if @tome.save
      render :show
    else
      render json: @tome.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @tome = Tome.find(params[:id])
    if @tome.update(tome_params)
      render :show
    else
      render json: @tome.errors.full_messages, status: :unprocessable_entity
    end
  end

  private
  def tome_params
    params.require(:tome).permit(
      :title,
      :description,
      :canon,
      :author_id,
      :author_name,
      :cover_url,
      :image600,
      :image300,
      :image75
    )
  end
end
