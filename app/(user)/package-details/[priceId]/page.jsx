
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
  const packageDetails = await fetch(
    `${process.env.baseUrl}/api/stripe/checkout`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId: priceId }),
    }
  ).then((res) => res.json());

  console.log(packageDetails);

  return (
    <>
      <Main contact={contact[0]} priceId={priceId} packageDetails={packageDetails} />
    </>
  );
}
