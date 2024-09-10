"use client";
import MainLayout from "../../../../components/layout/MainLayout";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
import CheckoutForm from "../../../../components/stripe/CheckoutForm";
import CompletePage from "../../../../components/stripe/CompletePage";
import { useEffect, useState } from "react";

export default function Main({ contact, priceId, packageDetails }) {
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
    if (!packageDetails?.price) return;
    if (confirmed) return;

    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stripePrice: packageDetails.price }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        // [DEV] For demo purposes only
        //setDpmCheckerLink(data.dpmCheckerLink);
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
    <MainLayout contact={contact} pageTitle="Payment">
      <div className="container pt-120">
        <div className="row">
          <div className="col-sm-12 col-md-6 gap-2 p-2">
            {packageDetails?.ok ? (
              <>
                <h2>
                  <u>Packages Information </u>{" "}
                </h2>
                <h3>Package Name: {packageDetails?.product?.name} </h3>
                <h3>
                  Package Description: {packageDetails?.product?.description}
                </h3>
                <h3>
                  Package Price: {packageDetails?.price?.unit_amount / 100}{" "}
                  {packageDetails?.price?.currency?.toUpperCase()}
                </h3>
                {packageDetails?.price?.recurring?.interval && (
                  <h3>
                    Recurring interval:{" "}
                    {packageDetails?.price?.recurring?.interval?.toUpperCase()}
                  </h3>
                )}
              </>
            ) : (
              <p>Invalid package</p>
            )}
          </div>
          <div className="col-sm-12 col-md-6 p-2">
            {clientSecret && (
              <Elements options={options} stripe={stripePromise}>
                {!confirmed && (
                  <CheckoutForm
                    dpmCheckerLink={dpmCheckerLink}
                    priceId={priceId}
                  />
                )}
              </Elements>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
