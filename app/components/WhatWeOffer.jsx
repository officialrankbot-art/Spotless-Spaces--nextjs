export default function WhatWeOffer() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">What We Offer</span>
          <h2>One trusted team, two kinds of spaces.</h2>
          <p>Whether it's a weekly refresh at home or a nightly contract at your office, every visit follows the same checklist-driven standard.</p>
        </div>
        <div className="split">
          <div className="service-card reveal">
            <span className="tag tag-residential">Residential</span>
            <h3>One Time &amp; Recurring Deep Cleaning</h3>
            <p style={{color: 'var(--slate)'}}>A thorough, top-to-bottom clean for houses, apartments, and condos — available one-time or on a recurring schedule.</p>
            <div className="price-tag"><span>Starting At&nbsp;</span>$180<span>&nbsp;per visit</span></div>
          </div>
          <div className="service-card reveal">
            <span className="tag tag-residential">Residential</span>
            <h3>Move In and Move Out Cleaning</h3>
            <p style={{color: 'var(--slate)'}}>A full, top-to-bottom detail clean of an empty (or nearly empty) space, built to satisfy landlord and buyer inspections.</p>
            <div className="price-tag"><span>Starting At&nbsp;</span>$210<span>&nbsp;per visit</span></div>
          </div>
          <div className="service-card reveal">
            <span className="tag tag-commercial">Commercial</span>
            <h3>Commercial Cleaning</h3>
            <p style={{color: 'var(--slate)'}}>Scheduled service for offices, retail, and light industrial spaces.</p>
            <div className="price-tag">Custom<span> quote by sq. ft.</span></div>
          </div>
        </div>
        <div className="prep-block reveal">
          <div className="prep-copy">
            <span className="eyebrow">Before We Arrive</span>
            <h3>How to prepare for your clean</h3>
            <ul>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Tidy up loose items and clutter so our team can focus on cleaning, not organizing</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Store away valuables and sensitive items in a secure spot</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Have a working vacuum available for our team to use</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Secure pets and let us know about any access details ahead of time</li>
            </ul>
          </div>
          <div className="prep-links">
            <span className="prep-links-label">Full customer guidelines</span>
            <a href="/Deep_Clean_Guidelines.pdf" target="_blank" rel="noopener" className="prep-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
              Deep Clean Guidelines
            </a>
            <a href="/Standard_Clean_Customer_Guidelines.pdf" target="_blank" rel="noopener" className="prep-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
              Standard Clean Guidelines
            </a>
            <a href="/Move-In_Move-Out_Customer_Guidelines.pdf" target="_blank" rel="noopener" className="prep-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
              Move-In / Move-Out Guidelines
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
