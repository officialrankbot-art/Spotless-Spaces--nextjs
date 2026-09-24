export default function FinalCTA() {
  return (
    <section>
      <div className="wrap">
        <div className="final-cta reveal">
          <span className="eyebrow" style={{color: 'var(--navy-800)'}}>Ready When You Are</span>
          <h2>Let's make your workplace spotless.</h2>
          <p>Book a free on-site or virtual walkthrough, and we&apos;ll send you a written quote with a clear, checklist-based scope.</p>
          <div style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="#walkthrough" className="btn btn-navy">Request a Free Walkthrough</a>
            <a href="tel:+12676621878" className="btn" style={{border: '1.5px solid var(--navy-800)', color: 'var(--navy-800)', background: 'transparent'}}>Call 267-662-1878</a>
          </div>
        </div>
      </div>
    </section>
  );
}
