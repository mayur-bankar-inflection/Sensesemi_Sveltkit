import { getPosts } from './_api.js';
export async function get() {
  const posts = await getPosts();
  const pages = posts.map(post => ({
    url: `https://yourwebsite.com/posts/${post.slug}`,
    lastmod: new Date(post.lastUpdated).toISOString()
  }));
  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourwebsite.com/</loc>
  </url>
  ${pages.map(page => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
  </url>`).join('')}
</urlset>`;
  return {
    body: xml,
    headers: {
      'Content-Type': 'application/xml'
    }
  };
}