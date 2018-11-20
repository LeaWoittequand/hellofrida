import "bootstrap";
import swal from 'sweetalert2';
const Rails = require('rails-ujs');
Rails.start();

const sendBtn = document.getElementById('send-subscription')
const input = document.getElementById('subscription_email')

// funtion to send data to subscriptions_controller
// then, at response, after save, pop the sweetAlert pop-up
function createSubscription(email) {
  Rails.ajax({
    url: `/subscriptions?subscription[email]=${email}`,
    type: "POST",
    // TODO: Change message
    success: swal({
      title: 'Merci !',
      text: 'La prochaine news arrive bientôt, à très vite!',
      type: 'success',
      confirmButtonText: 'Top !'
    })
  });
}

sendBtn.addEventListener('click', (event) => {
  event.preventDefault()
  const email = input.value
  input.value = ''
  createSubscription(email)
})

