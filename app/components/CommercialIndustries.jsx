import Link from "next/link";

// Drop this into app/page.js (e.g. right after <Walkthrough />) so Google
// and visitors can find the new commercial pages from the homepage.
const LINKS = [
  { href: "/commercial-cleaning", title: "Commercial Cleaning", text: "Nightly and weekly janitorial contracts across Montgomery County." },
  { href: "/daycare-cleaning", title: "Daycare Cleaning", text: "Child-safe, after-hours cleaning for child care centers." },
  { href: "/car-dealership-cleaning", title: "Car Dealership Cleaning", text: "Showrooms, lounges, restrooms, and offices kept customer-ready." },
  { href: "/warehouse-cleaning", title: "Warehouse Cleaning", text: "Break rooms, restrooms, offices, and floors, around your shifts." },
];

export default function CommercialIndustries() {
  return (
    <section id="industries" style={{ maxWidth: 1080, margin: "0 auto", padding: "56px 20px" }}>
      <p style={{ textTransform: "uppercase", letterSpacing: "0.08em", fontSize: 13, fontWeight: 800, color: "#2a7de1", margin: "0 0 8px" }}>
        Commercial Cleaning
      </p>
      <h2 style={{ fontFamily: "var(--font-fredoka), sans-serif", fontSize: "clamp(24px, 3.5vw, 34px)", margin: "0 0 20px", color: "#1b3050" }}>
        Commercial cleaning for Montgomery County businesses
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 16 }}>
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} style={{ background: "#f4f8fd", borderRadius: 16, padding: 20, color: "#1b3050", display: "block" }}>
            <strong style={{ display: "block", fontSize: 18, marginBottom: 6, color: "#2a7de1" }}>{l.title} →</strong>
            <span>{l.text}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
