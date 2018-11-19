class SubscriptionsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:create]

  def create
    sub = Subscription.create(subscription_params)
  end

  private

  def subscription_params
    params.require(:subscription).permit(:email)
  end
end
