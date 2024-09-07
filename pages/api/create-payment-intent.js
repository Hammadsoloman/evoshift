// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (stripePrice) => {
  console.log("mmmm", stripePrice);
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client

  return stripePrice.unit_amount ;
};

export default async function handler(req, res) {
  const { stripePrice } = req.body;
  console.log("mmmm", stripePrice);
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(stripePrice),
    currency: "usd",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  return res.status(200).send({
    clientSecret: paymentIntent.client_secret,
    // [DEV]: For demo purposes only, you should avoid exposing the PaymentIntent ID in the client-side code.
    dpmCheckerLink:
      process.env.NODE_ENV === "development"
        ? `https://dashboard.stripe.com/settings/payment_methods/review?transaction_id=${paymentIntent.id}`
        : "",
  });
}
