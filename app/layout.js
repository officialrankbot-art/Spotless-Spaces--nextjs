import "./globals.css";

const siteUrl = "https://www.spotlessspaces-cleaning.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Spotless Spaces | Commercial Cleaning in Montgomery & Bucks County, PA",
    template: "%s | Spotless Spaces",
  },
  description:
    "Spotless Spaces provides licensed, insured commercial and janitorial cleaning for offices, medical and dental practices, fitness centers, daycares, car dealerships, and warehouses in North Wales, Ambler, Blue Bell, Gwynedd, Horsham, Plymouth Meeting, Fort Washington, and the Main Line, PA. Residential cleaning also available. Request a free walkthrough.",
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
    title: "Spotless Spaces | Commercial Cleaning in Montgomery & Bucks County, PA",
    description:
      "Licensed, insured commercial cleaning for offices, medical and dental practices, fitness centers, daycares, car dealerships, and warehouses in Montgomery & Bucks County, PA. Residential cleaning also available. Request a free walkthrough.",
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
    title: "Spotless Spaces | Commercial Cleaning in Montgomery & Bucks County, PA",
    description:
      "Licensed, insured commercial cleaning for offices, medical and dental practices, fitness centers, daycares, car dealerships, and warehouses in Montgomery & Bucks County, PA. Residential cleaning also available. Request a free walkthrough.",
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
  "@type": "HomeAndConstructionBusiness",
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
  priceRange: "$150 - $$$",
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
