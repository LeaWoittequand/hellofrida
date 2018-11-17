require 'test_helper'

class SubscriptionsControllerTest < ActionDispatch::IntegrationTest
  test "should get email:string" do
    get subscriptions_email:string_url
    assert_response :success
  end

end
