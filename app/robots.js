export default function robots() {
  const siteUrl = "https://www.spotlessspaces-cleaning.com";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
