import Stripe from "stripe";
import { buffer } from "micro";

import ReceiptEmail from "../../../components/emails/ReceiptEmail";
import { transporter } from "../../../lib/nodemailer";
import { render } from "@react-email/render";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function POST(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const buf = await buffer(req);
  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      buf.toString(),
      sig,
      process.env.STRIPE_SECRET_WEBHOOK_KEY
    );
  } catch (err) {
    console.log(`Webhook Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const data = event.data.object;
      const metadata = data.metadata;
      const userId = metadata.userId;
      const priceId = metadata.priceId;
      const created = data.created;
      const currency = data.currency;
      const customerDetails = data.customer_details;
      const amount = data.amount_total;

      //Send order confirmation email
      try {
        const result = await transporter.sendMail({
          to:
            process.env.NODE_ENV === "production"
              ? customerDetails.email
              : "merazgatest@gmail.com",
          from: process.env.EMAIL_FROM_ORDERS,
          subject: "EvoShift Receipt!",
          html: `<div>${await render(
            ReceiptEmail({
              orderID: "orderID",
              orderDate: new Date(1725734298).toLocaleString(),
              userName: customerDetails.name,
              subscription: "subscription",
              price: amount,
            })
          )}</div>`,
        });
        const failed = result.rejected.concat(result.pending).filter(Boolean);
        if (failed.length) {
          console.log(`Email(s) (${failed.join(", ")}) could not be sent`);
          return res.status(400).json({
            reason: `Email(s) (${failed.join(", ")}) could not be sent`,
          });
        }
      } catch (err) {
        console.log(err);
      }
      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  return res.status(200).send();
}

export const config = {
  api: {
    bodyParser: false,
  },
};
