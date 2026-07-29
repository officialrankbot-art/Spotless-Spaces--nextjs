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
            <span className="tag">Residential</span>
            <h3>One Time &amp; Recurring Deep Cleaning</h3>
            <p style={{color: 'var(--slate)'}}>A thorough, top-to-bottom clean for houses, apartments, and condos — available one-time or on a recurring schedule.</p>
            <ul>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Kitchens, bathrooms, bedrooms &amp; living areas</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Dusting, vacuuming, mopping &amp; surface disinfecting</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Inside oven, fridge &amp; cabinets</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Weekly, bi-weekly, monthly or one-time visits</li>
            </ul>
            <div className="price-tag"><span>Starting At&nbsp;</span>$150<span>&nbsp;per visit</span></div>
          </div>
          <div className="service-card reveal">
            <span className="tag">Residential</span>
            <h3>Move In and Move Out Cleaning</h3>
            <p style={{color: 'var(--slate)'}}>A full, top-to-bottom detail clean of an empty (or nearly empty) space, built to satisfy landlord and buyer inspections.</p>
            <ul>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Inside &amp; outside of all cabinets and closets</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Appliance interiors &amp; exteriors</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Walls &amp; door frames spot-cleaned</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Floors detailed edge-to-edge</li>
            </ul>
            <div className="price-tag"><span>Starting At&nbsp;</span>$300<span>&nbsp;per visit</span></div>
          </div>
          <div className="service-card reveal">
            <span className="tag">Commercial</span>
            <h3>Commercial Cleaning</h3>
            <p style={{color: 'var(--slate)'}}>Scheduled service for offices, retail, and light industrial spaces.</p>
            <ul>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Offices, lobbies, restrooms &amp; break rooms</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Floor care: sweeping, mopping &amp; carpet vacuuming</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>After-hours &amp; weekend scheduling available</li>
              <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Custom contracts with account manager</li>
            </ul>
            <div className="price-tag">Custom<span> quote by sq. ft.</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
