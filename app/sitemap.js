export default function sitemap() {
  const siteUrl = "https://www.spotlessspaces-cleaning.com";
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
