"use client"
import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import Main from "./Main";

const contactquery = groq`
  *[_type=='contact'] {
    ...,
  } | order(_createdAt desc)
`;

export default async function Checkout({ params }) {
  const contact = await client.fetch(contactquery);
  const { priceId } = params;
  return (
    <>
      <Main contact={contact[0] } priceId={priceId} />
    </>
  );
}
