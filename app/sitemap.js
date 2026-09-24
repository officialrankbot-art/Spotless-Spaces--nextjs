import { TOWN_ORDER, townSlug } from "./_areas/content";

const SITE_URL = "https://www.spotlessspaces-cleaning.com";

export default function sitemap() {
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/commercial-cleaning`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/office-cleaning`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/medical-office-cleaning`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/optometry-office-cleaning`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/gym-cleaning`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/daycare-cleaning`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/car-dealership-cleaning`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/warehouse-cleaning`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/service-areas`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ...TOWN_ORDER.map((k) => ({ url: `${SITE_URL}/${townSlug(k)}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 })),
  ];
}
