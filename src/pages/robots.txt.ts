import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL("https://sujittra-seelabat.com");
  const basePath = import.meta.env.BASE_URL ?? "/";
  const normalizedBasePath = basePath === "/" ? "" : basePath.replace(/\/$/, "");
  const withBasePath = (path: string) => `${normalizedBasePath}${path.startsWith("/") ? path : `/${path}`}`;

  return new Response(
    [
      "User-agent: *",
      "Allow: /",
      "",
      `Sitemap: ${new URL(withBasePath("/sitemap.xml"), baseUrl).toString()}`,
      "",
    ].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
};
