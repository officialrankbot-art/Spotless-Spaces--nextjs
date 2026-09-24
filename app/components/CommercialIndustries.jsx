import Link from "next/link";

const CHECK = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
);

const INDUSTRIES = [
  { tag: "Offices", title: "Offices & Professional Suites", text: "Workstations, conference rooms, lobbies, kitchens, and restrooms.", href: "/commercial-cleaning" },
  { tag: "Healthcare", title: "Medical & Dental Offices", text: "Waiting rooms, exam and operatory surfaces, and restrooms disinfected on your schedule." },
  { tag: "Eye care", title: "Optometry & Eye Care Practices", text: "Front desks, frame displays, glass, exam rooms, and high-touch surfaces kept spotless." },
  { tag: "Fitness", title: "Gyms & Fitness Centers", text: "Workout floors, locker rooms, showers, and restrooms cleaned and sanitized." },
  { tag: "Child care", title: "Daycares & Child Care Centers", text: "Classrooms, nap rooms, and restrooms cleaned with child-safe products.", href: "/daycare-cleaning" },
  { tag: "Automotive", title: "Car Dealerships", text: "Showrooms, customer lounges, service waiting areas, and offices.", href: "/car-dealership-cleaning" },
  { tag: "Industrial", title: "Warehouses & Light Industrial", text: "Break rooms, restrooms, locker rooms, offices, and floors, around your shifts.", href: "/warehouse-cleaning" },
  { tag: "Retail", title: "Retail Stores & Showrooms", text: "Sales floors, fitting rooms, entryways, and glass kept customer-ready." },
];

const INCLUDED = [
  "Nightly, weekly, or custom schedule",
  "After-hours & weekend service",
  "Dedicated account manager",
  "Certificate of insurance on request",
  "Written, checklist-based scope",
];

export default function CommercialIndustries() {
  return (
    <section id="industries">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Commercial Cleaning</span>
          <h2>Cleaning built around your business</h2>
          <p>
            From medical offices and gyms to dealerships and warehouses, you get one insured, dependable team,
            one written checklist, and one point of contact who picks up the phone. Every contract is quoted by square
            footage after a free walkthrough.
          </p>
        </div>

        <div className="industry-grid">
          {INDUSTRIES.map((i) => (
            <div key={i.title} className="industry-card reveal">
              <span className="freq freq-commercial">{i.tag}</span>
              <h3>{i.title}</h3>
              <p>{i.text}</p>
              {i.href ? (
                <Link href={i.href} className="card-link">Learn more →</Link>
              ) : (
                <a href="#walkthrough" className="card-link">Get a quote →</a>
              )}
            </div>
          ))}
        </div>
        <p className="industry-more reveal">
          Don&apos;t see your business listed? We clean most types of commercial spaces.{" "}
          <a href="#walkthrough">Tell us about yours</a>{" "}and we&apos;ll put together a plan.
        </p>

        <div className="checklist-note reveal" style={{ alignItems: "flex-start" }}>
          <div className="icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontWeight: 800, margin: "0 0 10px", color: "var(--navy-950)" }}>Every commercial contract includes:</p>
            <ul className="included-list">
              {INCLUDED.map((t) => (
                <li key={t}>{CHECK}{t}</li>
              ))}
            </ul>
            <p style={{ margin: "12px 0 0", fontSize: ".92rem", fontWeight: 400, color: "var(--navy-800)" }}>
              <strong>Optional add-on:</strong>{" "}supply &amp; consumable restocking (paper towels, toilet paper, soap, and trash liners).
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }} className="reveal">
          <a href="#walkthrough" className="btn btn-navy">Request a Free Walkthrough</a>
          <Link href="/commercial-cleaning" className="btn" style={{ border: "1.5px solid var(--navy-800)", color: "var(--navy-800)", background: "transparent" }}>
            See all commercial services
          </Link>
        </div>
      </div>
    </section>
  );
}
