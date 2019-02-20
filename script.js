function handleClickLink(event) {
    const block = event.target.dataset.block;
    document.getElementById(block).scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

document.querySelectorAll('.link').forEach(el => {
    el.addEventListener('click', handleClickLink);
});

let waypoint = new Waypoint({
    element: document.getElementById('mission'),
    handler: function(direction) {
        const nav = document.getElementById('nav');
        if (direction === 'down') {
            nav.classList.add('sticky');
            console.log('waypoint hit');
        } else {
            nav.classList.remove('sticky');
        }
    },
    offset: 65
});

// STRIPE PAYMENT
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")("sk_test_SyGiw3HxW5ZdIxJDUddxKybu");

// Token is created using Checkout or Elements!
// Get the payment token ID submitted by the form:
const token = request.body.stripeToken; // Using Express

(async () => {
  const charge = await stripe.charges.create({
    amount: 999,
    currency: 'usd',
    description: 'Example charge',
    source: token,
  });
})();