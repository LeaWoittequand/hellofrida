class SubscriptionsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:create]

  def create
    puts "PARAMS"
    puts params
    render json: params
  end
end
