import MainLayout from "../../../../components/layout/MainLayout";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
);
import CheckoutForm from "../../../../components/stripe/CheckoutForm";
import CompletePage from "../../../../components/stripe/CompletePage";
import { useEffect, useState } from "react";

export default function Main({ contact, priceId }) {
  const [price, setPrice] = useState(null);
  const [product, setProduct] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [dpmCheckerLink, setDpmCheckerLink] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    setConfirmed(
      new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
      )
    );
  });

  useEffect(() => {
    //Get Service details from Stripe
    // Create PaymentIntent as soon as the page loads

    fetch("/api/stripe/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId: priceId }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Details:", data);
        if (data.ok) {
          setPrice(data.price);
          setProduct(data.product);

          // Create PaymentIntent as soon as the page loads
          fetch("/api/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({  stripePrice: data.price }),
          })
            .then((res) => res.json())
            .then((data) => {
              setClientSecret(data.clientSecret);
              // [DEV] For demo purposes only
              //setDpmCheckerLink(data.dpmCheckerLink);
            });
        } else {
          console.log("Invalid package");
        }
      });
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <MainLayout contact={contact}>
      <div className="container pt-120">
        <div className="row">
          <div className="col-6">
            <h2>Packages Information</h2>
            <p>Package Name: {product?.name} </p>
            <p>Package Description: {product?.description} </p>
            <p>
              Package Price: {price?.unit_amount / 100} {price?.currency}{" "}
            </p>
          </div>
          <div className="col-6">
            {clientSecret && (
              <Elements options={options} stripe={stripePromise}>
                {confirmed ? (
                  <CompletePage />
                ) : (
                  <CheckoutForm dpmCheckerLink={dpmCheckerLink} priceId={priceId} />
                )}
              </Elements>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
