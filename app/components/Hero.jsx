export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <p style={{color: 'var(--gold-500)', fontFamily: 'Fredoka,sans-serif', fontWeight: '700', fontSize: '1.15rem', letterSpacing: '.02em', margin: '0 0 10px'}}>Serving Montgomery &amp; Bucks County, PA</p>
            <span className="eyebrow">Residential &amp; Commercial Cleaning Services</span>
            <h1>Spotless Spaces.<br/><em>Stress-free living.</em></h1>
            <p className="lead">Vetted, insured cleaning teams for homes and businesses in North Wales, Ambler, Blue Bell, Gwynedd, Horsham, Plymouth Meeting, Fort Washington, and the Main Line. Tell us about your space, get an instant estimate, and book online in under two minutes.</p>
            <div className="hero-cta">
              <a href="https://spotlessspaces.bookingkoala.com/booknow" target="_blank" rel="noopener noreferrer" className="btn btn-gold">Get an Instant Quote</a>
              <a href="tel:+12676621878" className="btn btn-outline">Call 267-662-1878</a>
            </div>
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
          <div className="hero-badge"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>Background-Checked Staff</div>
          <div className="hero-badge"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/></svg>Friendly, Detail-Loving Team</div>
          <div className="hero-badge"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s-8-5-8-12a8 8 0 0116 0c0 7-8 12-8 12z"/></svg>Thoughtful, Careful Cleaning</div>
          <div className="hero-badge"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>Easy Online Payments</div>
        </div>
      </div>
    </section>
  );
}
