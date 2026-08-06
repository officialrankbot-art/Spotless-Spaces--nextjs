export default function Difference() {
  return (
    <section id="difference" style={{background: 'var(--mist)'}}>
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow">Our Difference</span>
          <h2>What changes when we visit</h2>
          <p>Every job follows the same room-by-room checklist, so the result is consistent every single time.</p>
        </div>
        <div className="compare-wrap reveal">
          <div className="compare-grid">
            <div className="vs-divider"></div>
            <div className="compare-col before">
              <span className="tagline">Before</span>
              <h4>A typical busy space</h4>
              <ul>
                <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>Dust on baseboards &amp; vents</li>
                <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>Streaked counters &amp; glass</li>
                <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>Scuffed, sticky floors</li>
                <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>Overflowing bins</li>
              </ul>
            </div>
            <div className="compare-col after">
              <span className="tagline">After Spotless Spaces</span>
              <h4>Same space, checklist complete</h4>
              <ul>
                <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Baseboards &amp; vents wiped down</li>
                <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Streak-free counters &amp; glass</li>
                <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Floors vacuumed &amp; mopped</li>
                <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Bins emptied &amp; relined</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="checklist-note reveal" style={{marginTop: '36px'}}>
          <div className="icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/></svg></div>
          <p>Because every visit follows the same checklist, the results are consistent and expectations are clear from the start — so clients know exactly what they're getting, and walk away satisfied with a genuinely refreshed space every time.</p>
        </div>
      </div>
    </section>
  );
}
