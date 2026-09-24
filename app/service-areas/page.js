import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Walkthrough from "../components/Walkthrough";
import SiteScripts from "../components/SiteScripts";
import styles from "../_industry/IndustryPage.module.css";
import { TOWNS, TOWN_ORDER, townSlug } from "../_areas/content";

export const metadata = {
  title: "Service Areas: Commercial Cleaning in Montgomery County, PA",
  description:
    "Commercial cleaning in North Wales, Ambler, Blue Bell, Horsham, Fort Washington, Plymouth Meeting, Gwynedd, and nearby Montgomery County, PA towns.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreas() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link> <span aria-hidden="true">/</span> <span>Service Areas</span>
        </div>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Service Areas</p>
          <h1 className={styles.h1}>Commercial Cleaning Across Montgomery County, PA</h1>
          <p className={styles.intro}>
            Based in North Wales, Spotless Spaces provides commercial, office, and janitorial cleaning throughout
            Montgomery County, plus parts of Bucks County and the Main Line. Choose your town to learn more, or
            request a free walkthrough below.
          </p>
        </section>
        <section className={styles.section}>
          <div className={styles.grid}>
            {TOWN_ORDER.map((k) => (
              <div key={k} className={styles.card}>
                <h2 className={styles.h3}>
                  <Link href={`/${townSlug(k)}`}>Commercial Cleaning in {TOWNS[k].name}, PA →</Link>
                </h2>
                <p>ZIP {TOWNS[k].zip}. Also serving {TOWNS[k].nearby.slice(0, 3).join(", ")}.</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 20 }}>
            Don&apos;t see your town? We also serve surrounding areas in Montgomery County, Bucks County, and the Main
            Line. <Link href="#walkthrough">Tell us where you&apos;re located</Link> and we&apos;ll let you know.
          </p>
        </section>
      </main>
      <Walkthrough />
      <Footer />
      <SiteScripts />
    </>
  );
}
