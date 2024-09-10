import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";

import ThankYou from "./ThankYou";

const contactquery = groq`
  *[_type=='contact'] {
    ...,
  } | order(_createdAt desc)
`;

export default async function Checkout({ params }) {
  const contact = await client.fetch(contactquery);

  return (
    <>
      <ThankYou contact={contact[0]}/>
    </>
  );
}
