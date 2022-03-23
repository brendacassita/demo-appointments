class Api::PhysiciansController < ApplicationController

  def index
    render json: Physician.all
  end 
end
