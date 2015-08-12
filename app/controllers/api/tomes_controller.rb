class Api::TomesController < ApplicationController
  def index
    @tomes = Tome.all
    render :index
  end
end
