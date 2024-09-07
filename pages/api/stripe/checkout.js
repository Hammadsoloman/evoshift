import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
export default async function POST(req, res) {
  try {
    // you can implement some basic check here like, is user valid or not
    const data = req.body;
    console.log(data);

    const price = await stripe.prices.retrieve(data.priceId);
    console.log(price);
    if (price.id) {
      const product = await stripe.products.retrieve(price.product);
      console.log(product);
      return res.status(200).json({ price: price, product: product, ok: true });
    } else {
      return res.status(404).json({ reason: "", ok: false });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ reason: "Internal Server" });
  }
}
