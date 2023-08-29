const Stripe = require("stripe");
const stripe = Stripe(
  // stripe api key
);

module.exports = {
  stripe: stripe,
};
