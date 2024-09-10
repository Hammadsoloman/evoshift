"use client";
import CompletePage from "../../../components/stripe/CompletePage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import MainLayout from "../../../components/layout/MainLayout";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function ThankYou({ contact }) {
  const [confirmed, setConfirmed] = useState(false);
  useEffect(() => {
    setConfirmed(
      new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
      )
    );
  });
  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret: confirmed,
    appearance,
  };

  if (!confirmed) return <></>;

  return (
    <MainLayout contact={contact} pageTitle="Thank You!">
      <div className="container pt-120 pb-120 ">
        <Elements options={options} stripe={stripePromise}>
          <CompletePage />
        </Elements>
      </div>
    </MainLayout>
  );
}
