export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <h1 className="hero-kicker">Commercial Cleaning in Montgomery &amp; Bucks County, PA</h1>
            <p className="hero-title">Spotless Spaces.<br/><em>Stress-free living.</em></p>
            <p className="lead">Insured, reliable commercial cleaners for offices, medical and dental practices, fitness centers, daycares, dealerships, warehouses, and more across North Wales, Ambler, Blue Bell, Horsham, Fort Washington, Plymouth Meeting, and the Main Line. Nightly, weekly, or custom schedules, built around your business hours.</p>
            <div className="hero-cta">
              <a href="#walkthrough" className="btn btn-gold">Request a Free Walkthrough</a>
              <a href="tel:+12676621878" className="btn btn-outline">Call 267-662-1878</a>
            </div>
            <p className="hero-residential">
              Need your home cleaned? We offer residential deep, standard, and move-in/move-out cleaning too.{" "}
              <a href="#residential">See residential services →</a>
            </p>
          </div>
          <div className="hero-visual">
            <div className="sparkle-panel">
              <div className="tile"></div><div className="tile shine"></div><div className="tile"></div>
              <div className="tile"></div><div className="tile"></div><div className="tile shine"></div>
              <div className="tile shine"></div><div className="tile"></div><div className="tile"></div>
            </div>
          </div>
        </div>
        <div className="hero-badges">
          <div className="hero-badge"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/></svg>Licensed &amp; Insured</div>
          <div className="hero-badge"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>Checklist-Driven Cleaning</div>
          <div className="hero-badge"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/></svg>Certificate of Insurance on Request</div>
          <div className="hero-badge"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s-8-5-8-12a8 8 0 0116 0c0 7-8 12-8 12z"/></svg>After-Hours &amp; Weekend Service</div>
          <div className="hero-badge"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>Same Crew Every Visit</div>
        </div>
      </div>
    </section>
  );
}
