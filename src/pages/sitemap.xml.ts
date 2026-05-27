import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL("https://sujittra-seelabat.com");
  const basePath = import.meta.env.BASE_URL ?? "/";
  const normalizedBasePath = basePath === "/" ? "" : basePath.replace(/\/$/, "");
  const withBasePath = (path: string) => `${normalizedBasePath}${path.startsWith("/") ? path : `/${path}`}`;
  const pageUrl = new URL(withBasePath("/"), baseUrl).toString();

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
      `  <url>\n` +
      `    <loc>${pageUrl}</loc>\n` +
      `    <changefreq>monthly</changefreq>\n` +
      `    <priority>1.0</priority>\n` +
      `  </url>\n` +
      `</urlset>\n`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    },
  );
};
