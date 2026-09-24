import "./globals.css";

const siteUrl = "https://www.spotlessspaces-cleaning.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Commercial Cleaning Services in Montgomery County, PA | Spotless Spaces",
    template: "%s | Spotless Spaces",
  },
  description:
    "Commercial and office cleaning in North Wales, Blue Bell, Ambler & Montgomery County, PA. Medical, gym, daycare, and home cleaning too. Free walkthrough.",
  keywords: [
    "commercial cleaning Montgomery County PA",
    "commercial cleaning Bucks County PA",
    "janitorial services Montgomery County PA",
    "office cleaning North Wales PA",
    "office cleaning Blue Bell PA",
    "medical office cleaning Montgomery County PA",
    "dental office cleaning Montgomery County PA",
    "gym cleaning Montgomery County PA",
    "daycare cleaning Montgomery County PA",
    "car dealership cleaning PA",
    "warehouse cleaning Montgomery County PA",
    "house cleaning Montgomery County PA",
    "house cleaning Bucks County PA",
    "house cleaning Main Line PA",
    "house cleaning Ambler PA",
    "house cleaning Blue Bell PA",
    "house cleaning Gwynedd PA",
    "house cleaning Horsham PA",
    "house cleaning Plymouth Meeting PA",
    "move in move out cleaning",
    "deep cleaning service",
    "residential cleaning company",
    "office cleaning service",
  ],
  authors: [{ name: "Spotless Spaces" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Spotless Spaces",
    title: "Commercial Cleaning Services in Montgomery County, PA | Spotless Spaces",
    description:
      "Commercial and office cleaning in North Wales, Blue Bell, Ambler & Montgomery County, PA. Medical, gym, daycare, and home cleaning too. Free walkthrough.",
    locale: "en_US",
    images: [
      {
        url: "/logo.jpg",
        width: 400,
        height: 400,
        alt: "Spotless Spaces logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Commercial Cleaning Services in Montgomery County, PA | Spotless Spaces",
    description:
      "Commercial and office cleaning in North Wales, Blue Bell, Ambler & Montgomery County, PA. Medical, gym, daycare, and home cleaning too. Free walkthrough.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Spotless Spaces",
  description:
    "Insured commercial and janitorial cleaning contracts for offices, medical and dental practices, fitness centers, daycares, car dealerships, and warehouses in North Wales, Ambler, Blue Bell, Gwynedd, Horsham, Plymouth Meeting, Fort Washington, and the Main Line, PA. Residential deep, standard, and move-in/move-out cleaning also available.",
  url: siteUrl,
  telephone: "+12676621878",
  email: "info@spotlessspaces-cleaning.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "North Wales",
    addressRegion: "PA",
    addressCountry: "US",
  },
  areaServed: [
    "North Wales, PA",
    "Ambler, PA",
    "Blue Bell, PA",
    "Gwynedd, PA",
    "Gwynedd Valley, PA",
    "Horsham, PA",
    "Plymouth Meeting, PA",
    "Fort Washington, PA",
    "Main Line, PA",
    "Montgomery County, PA",
    "Bucks County, PA",
  ],
  priceRange: "$$",
  image: `${siteUrl}/logo.jpg`,
  logo: `${siteUrl}/logo.jpg`,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cleaning services",
    itemListElement: [
      ["Commercial cleaning", "/commercial-cleaning"],
      ["Office cleaning", "/office-cleaning"],
      ["Medical and dental office cleaning", "/medical-office-cleaning"],
      ["Optometry and eye care office cleaning", "/optometry-office-cleaning"],
      ["Gym and fitness center cleaning", "/gym-cleaning"],
      ["Daycare and child care center cleaning", "/daycare-cleaning"],
      ["Car dealership cleaning", "/car-dealership-cleaning"],
      ["Warehouse and light industrial cleaning", "/warehouse-cleaning"],
      ["Residential cleaning", "/#residential"],
    ].map(([name, path]) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name, url: `${siteUrl}${path}` },
    })),
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <script src="//code.tidio.co/e2oyht9rhdaure2n1j1zfxqzciypichk.js" async></script>
      </body>
    </html>
  );
}
