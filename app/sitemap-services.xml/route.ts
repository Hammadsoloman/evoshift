import { getServerSideSitemap } from "next-sitemap";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import { NextRequest } from "next/server";

const servicesQuery = groq`
  *[_type == "service"] {
    "slug": slug.current,
    _updatedAt
  }
`;
export async function GET(request: NextRequest) {
  const services = await client.fetch(servicesQuery);

  const fields = services.map((service: any) => ({
    loc: `https://www.evoshift.net/service/${service.slug}`, // Adjust this path to match your service page URLs
    lastmod: new Date(service._updatedAt).toISOString(),
    priority: 0.7,
  }));

  return getServerSideSitemap(fields);
}
