import { getServerSideSitemap } from "next-sitemap";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import { NextRequest } from "next/server";

const casesQuery = groq`
  *[_type == "casestudy"] {
    "slug": slug.current,
    _updatedAt
  }
`;

export async function GET(request: NextRequest) {
  const cases = await client.fetch(casesQuery);

  const fields = cases.map((item: any) => ({
    loc: `https://www.evoshift.net/portfolio/${item.slug}`, // Adjust this path to match your routing
    lastmod: new Date(item._updatedAt).toISOString(),
    priority: 0.7,
  }));

  return getServerSideSitemap(fields);
}
