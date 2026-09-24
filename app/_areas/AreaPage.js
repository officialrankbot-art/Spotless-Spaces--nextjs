import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Walkthrough from "../components/Walkthrough";
import SiteScripts from "../components/SiteScripts";
import styles from "../_industry/IndustryPage.module.css";
import { INDUSTRIES, INDUSTRY_ORDER, SITE_URL, PHONE_DISPLAY, PHONE_TEL, EMAIL } from "../_industry/content";
import { TOWNS, TOWN_ORDER, townSlug } from "./content";

export function areaMetadata(key) {
  const t = TOWNS[key];
  const slug = townSlug(key);
  const title = `Commercial Cleaning in ${t.name}, PA`;
  const description = `Commercial cleaners serving ${t.name}, PA ${t.zip}. Office, medical, gym, and janitorial cleaning on your schedule. Licensed & insured. Free walkthrough.`;
  return {
    title,
    description,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      type: "website",
      url: `${SITE_URL}/${slug}`,
      siteName: "Spotless Spaces",
      title: `${title} | Spotless Spaces`,
      description,
      locale: "en_US",
      images: [{ url: "/logo.jpg", width: 400, height: 400, alt: "Spotless Spaces logo" }],
    },
  };
}

const SUMMARIES = {
  office: "Workstations, conference rooms, kitchens, and restrooms on a nightly or weekly schedule.",
  medical: "Waiting rooms, exam rooms, operatories, and restrooms cleaned and disinfected after hours.",
  eyecare: "Streak-free glass, dust-free frame displays, clean exam rooms, and restrooms.",
  fitness: "Workout floors, locker rooms, showers, and restrooms cleaned around your hours.",
  daycare: "Classrooms, nap rooms, and restrooms cleaned after hours with child-safe products.",
  dealership: "Showrooms, customer lounges, service waiting areas, and offices kept customer-ready.",
  warehouse: "Break rooms, restrooms, offices, and floors cleaned around your shifts.",
};

function faqs(t) {
  return [
    {
      q: `Do you provide commercial cleaning in ${t.name}, PA?`,
      a: `Yes. We clean offices, medical and dental practices, gyms, daycares, dealerships, warehouses, and retail spaces in ${t.name} (${t.zip}) and nearby ${t.nearby.slice(0, 3).join(", ")}.`,
    },
    {
      q: `How much does commercial cleaning cost in ${t.name}?`,
      a: "Pricing depends on square footage, how often you need service, and the scope of work. We start with a free walkthrough, on-site or virtual, and send a written quote with a clear checklist.",
    },
    {
      q: "Can you clean after hours or on weekends?",
      a: "Yes. Most of our commercial clients are cleaned in the evening or early morning, so cleaning never interrupts your staff or customers.",
    },
    {
      q: "Are you licensed and insured?",
      a: "Yes. We can send a certificate of insurance before we start, and add your company or landlord as additional insured if required.",
    },
  ];
}

export default function AreaPage({ town }) {
  const t = TOWNS[town];
  const slug = townSlug(town);
  const url = `${SITE_URL}/${slug}`;
  const services = INDUSTRY_ORDER.filter((k) => k !== "commercial").map((k) => ({ ...INDUSTRIES[k], summary: SUMMARIES[k] }));
  const otherTowns = TOWN_ORDER.filter((k) => k !== town);
  const q = faqs(t);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Commercial Cleaning in ${t.name}, PA`,
      serviceType: "Commercial cleaning",
      url,
      provider: {
        "@type": "LocalBusiness",
        name: "Spotless Spaces",
        url: SITE_URL,
        telephone: PHONE_TEL,
        email: EMAIL,
        image: `${SITE_URL}/logo.jpg`,
        address: { "@type": "PostalAddress", addressLocality: "North Wales", addressRegion: "PA", addressCountry: "US" },
      },
      areaServed: [
        { "@type": "City", name: `${t.name}, PA` },
        ...t.nearby.map((n) => ({ "@type": "Place", name: `${n}, PA` })),
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: q.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE_URL}/service-areas` },
        { "@type": "ListItem", position: 3, name: t.name, item: url },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className={styles.page}>
        <div className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link> <span aria-hidden="true">/</span>{" "}
          <Link href="/service-areas">Service Areas</Link> <span aria-hidden="true">/</span> <span>{t.name}</span>
        </div>

        <section className={styles.hero}>
          <p className={styles.eyebrow}>Commercial Cleaners in {t.name}, PA {t.zip}</p>
          <h1 className={styles.h1}>Commercial Cleaning Services in {t.name}, PA</h1>
          <p className={styles.intro}>{t.intro}</p>
          <div className={styles.ctaRow}>
            <Link href="#walkthrough" className={styles.ctaPrimary}>Request a Free Walkthrough</Link>
            <a href={`tel:${PHONE_TEL}`} className={styles.ctaSecondary}>Call {PHONE_DISPLAY}</a>
          </div>
          <ul className={styles.trust}>
            <li>Licensed &amp; Insured</li>
            <li>Same Crew Every Visit</li>
            <li>After-Hours Scheduling</li>
            <li>Certificate of Insurance on Request</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>Commercial cleaning for {t.name} businesses</h2>
          <p>{t.local}</p>
          <div className={styles.grid}>
            {services.map((s) => (
              <div key={s.slug} className={styles.card}>
                <h3 className={styles.h3}><Link href={`/${s.slug}`}>{s.navLabel} →</Link></h3>
                <p>{s.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>How it works</h2>
          <ol className={styles.steps}>
            <li><strong>Free walkthrough.</strong> We visit your {t.name} location (or do a virtual walkthrough) and learn your hours, priorities, and any special requirements.</li>
            <li><strong>Written quote and checklist.</strong> You get a clear, room-by-room scope and price, with optional add-ons listed separately.</li>
            <li><strong>Your team starts.</strong> The same crew services your building whenever possible, following the same checklist every visit.</li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>Also serving near {t.name}</h2>
          <ul className={styles.areas}>
            {t.nearby.map((n) => {
              const match = TOWN_ORDER.find((k) => TOWNS[k].name === n);
              return <li key={n}>{match ? <Link href={`/${townSlug(match)}`}>{n}</Link> : n}</li>;
            })}
          </ul>
        </section>
      </main>
      <Walkthrough />
      <main className={styles.page}>
        <section className={styles.section}>
          <h2 className={styles.h2}>Frequently asked questions</h2>
          <div className={styles.faqs}>
            {q.map((f) => (
              <details key={f.q} className={styles.faq}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>Other areas we serve</h2>
          <ul className={styles.related}>
            {otherTowns.map((k) => (
              <li key={k}><Link href={`/${townSlug(k)}`}>Commercial cleaning in {TOWNS[k].name}</Link></li>
            ))}
            <li><Link href="/service-areas">All service areas</Link></li>
          </ul>
        </section>
      </main>
      <Footer />
      <SiteScripts />
    </>
  );
}
