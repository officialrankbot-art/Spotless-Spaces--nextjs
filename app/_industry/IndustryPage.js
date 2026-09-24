import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Walkthrough from "../components/Walkthrough";
import SiteScripts from "../components/SiteScripts";
import styles from "./IndustryPage.module.css";
import {
  INDUSTRIES,
  INDUSTRY_ORDER,
  AREAS,
  SITE_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
} from "./content";

// Builds the <head> metadata for one industry page.
export function industryMetadata(key) {
  const p = INDUSTRIES[key];
  const url = `${SITE_URL}/${p.slug}`;
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: { canonical: `/${p.slug}` },
    openGraph: {
      type: "website",
      url,
      siteName: "Spotless Spaces",
      title: `${p.metaTitle} | Spotless Spaces`,
      description: p.metaDescription,
      locale: "en_US",
      images: [{ url: "/logo.jpg", width: 400, height: 400, alt: "Spotless Spaces logo" }],
    },
    twitter: {
      card: "summary",
      title: `${p.metaTitle} | Spotless Spaces`,
      description: p.metaDescription,
      images: ["/logo.jpg"],
    },
  };
}

function structuredData(p) {
  const url = `${SITE_URL}/${p.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: p.h1,
      serviceType: p.serviceType,
      url,
      description: p.metaDescription,
      provider: {
        "@type": "LocalBusiness",
        name: "Spotless Spaces",
        url: SITE_URL,
        telephone: PHONE_TEL,
        email: EMAIL,
        image: `${SITE_URL}/logo.jpg`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "North Wales",
          addressRegion: "PA",
          addressCountry: "US",
        },
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Montgomery County, PA" },
        ...AREAS.map((a) => ({ "@type": "Place", name: `${a}, PA` })),
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: p.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: p.navLabel, item: url },
      ],
    },
  ];
}

const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Walkthrough request"
)}&body=${encodeURIComponent(
  "Hi Spotless Spaces,\n\nI'd like to schedule a free walkthrough.\n\nBusiness name:\nAddress:\nApprox. square footage:\nBest day/time for a walkthrough:\nBest phone number:\n\nThanks!"
)}`;

export default function IndustryPage({ industry }) {
  const p = INDUSTRIES[industry];
  const others = INDUSTRY_ORDER.filter((k) => k !== industry).map((k) => INDUSTRIES[k]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(p)) }}
      />
      <Header />
      <main className={styles.page}>
        <div className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link> <span aria-hidden="true">/</span> <span>{p.navLabel}</span>
        </div>

        <section className={styles.hero}>
          <p className={styles.eyebrow}>{p.eyebrow}</p>
          <h1 className={styles.h1}>{p.h1}</h1>
          <p className={styles.intro}>{p.intro}</p>
          <div className={styles.ctaRow}>
            <Link href="#walkthrough" className={styles.ctaPrimary}>
              Request a Free Walkthrough
            </Link>
            <a href={`tel:${PHONE_TEL}`} className={styles.ctaSecondary}>
              Call {PHONE_DISPLAY}
            </a>
          </div>
          <ul className={styles.trust}>
            <li>Licensed &amp; Insured</li>
            <li>Same Crew Every Visit</li>
            <li>After-Hours Scheduling</li>
            <li>Certificate of Insurance on Request</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>Why businesses choose Spotless Spaces</h2>
          <div className={styles.grid}>
            {p.highlights.map((h) => (
              <div key={h.title} className={styles.card}>
                <h3 className={styles.h3}>{h.title}</h3>
                <p>{h.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>{p.sectionsTitle}</h2>
          <div className={styles.grid}>
            {p.sections.map((s) => (
              <div key={s.title} className={styles.card}>
                <h3 className={styles.h3}>
                  {s.href ? <Link href={s.href}>{s.title} →</Link> : s.title}
                </h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>How it works</h2>
          <ol className={styles.steps}>
            <li>
              <strong>Free walkthrough.</strong> We visit your site (or do a virtual walkthrough) and learn your
              hours, priorities, and any special requirements.
            </li>
            <li>
              <strong>Written quote and checklist.</strong> You get a clear, room-by-room scope and a fixed
              monthly price, with optional add-ons listed separately.
            </li>
            <li>
              <strong>Your dedicated team starts.</strong> The same crew services your building, following the
              same checklist every visit, with one account manager as your point of contact.
            </li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>Areas we serve</h2>
          <p>
            We provide {p.serviceType.toLowerCase()} throughout Montgomery County and the Philadelphia area,
            including:
          </p>
          <ul className={styles.areas}>
            {AREAS.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </section>

      </main>
      <Walkthrough />
      <main className={styles.page}>
        <section className={styles.section}>
          <h2 className={styles.h2}>Frequently asked questions</h2>
          <div className={styles.faqs}>
            {p.faqs.map((f) => (
              <details key={f.q} className={styles.faq}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.finalCta}>
          <h2 className={styles.h2}>Get a quote for your facility</h2>
          <p>
            Tell us about your space and we&apos;ll schedule a free walkthrough, then send you a written quote
            with a clear checklist.
          </p>
          <div className={styles.ctaRow}>
            <Link href="#walkthrough" className={styles.ctaPrimary}>
              Request a Free Walkthrough
            </Link>
            <a href={MAILTO} className={styles.ctaSecondary}>
              Email Us to Schedule
            </a>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>More commercial services</h2>
          <ul className={styles.related}>
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/${o.slug}`}>{o.navLabel}</Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
      <SiteScripts />
    </>
  );
}
