import "bootstrap";

const Rails = require('rails-ujs');
Rails.start();

const sendBtn = document.getElementById('send-subscription')
const input = document.getElementById('subscription_email')

function createSubscription(email) {
  Rails.ajax({
    url: `/subscriptions?email=${email}`,
    type: "POST",
    success: function(data) {
      console.log(data);
    }
  });
}

sendBtn.addEventListener('click', (event) => {
  event.preventDefault()
  const email = input.value
  input.value = ''
  createSubscription(email)
})

