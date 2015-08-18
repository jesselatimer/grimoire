class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    if @review.save
      render json: @review
    else
      render json: @review.errors.full_messages
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors.full_messages
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy!
    render json: @review
  end

  private
  def review_params
    params.require(:review).permit(:title, :body, :rating, :author_id, :tome_id)
  end
end
