import { getServerSideSitemap } from 'next-sitemap';
import { groq } from 'next-sanity';
import { client } from "../../lib/sanity.client";
import { NextRequest } from 'next/server';

const postsQuery = groq`
  *[_type == "post"] {
    "slug": slug.current,
    _updatedAt
  }
`;

export async function GET(request: NextRequest) {
  const posts = await client.fetch(postsQuery);

  const fields = posts.map((post: any) => ({
    loc: `https://www.evoshift.net/blog/${post.slug}`, // Adjust path to match your blog post URLs
    lastmod: new Date(post._updatedAt).toISOString(),
     priority: 0.7,
  }));

  return getServerSideSitemap(fields);
}
