export default function Pricing() {
  return (
    <section id="pricing" style={{background: 'var(--mist)'}}>
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow">Residential Pricing</span>
          <h2>Straightforward home packages</h2>
          <p>Every tier includes our quality checklist. Commercial pricing is custom, based on a free walkthrough.</p>
        </div>
        <div className="pricing-grid pricing-grid-3">
          <div className="price-card featured reveal" style={{position: 'relative'}}>
            <h3>Deep Clean</h3>
            <div className="amount"><span>Starting At&nbsp;</span>$140</div>
            <p style={{color: 'var(--slate)', fontSize: '.88rem', margin: '-12px 0 20px'}}>We recommend every new client start here — it resets the whole space before switching to easier, more affordable Standard Cleans for upkeep.</p>
            <ul>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Dusting, vacuuming &amp; mopping</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Exterior appliances wiped &amp; sanitized</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Baseboards, vents &amp; light fixtures</li>
            </ul>
            <a href="#quote" className="btn btn-gold" style={{width: '100%'}}>Request a Deep Clean</a>
            <div className="price-arrow" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </div>
          </div>
          <div className="price-card reveal">
            <h3>Standard Clean</h3>
            <div className="amount"><span>Starting At&nbsp;</span>$105</div>
            <p style={{color: 'var(--slate)', fontSize: '.88rem', margin: '-12px 0 20px'}}>Recurring — weekly, bi-weekly, or monthly. Our go-to for traditional ongoing maintenance once your first Deep Clean is done.</p>
            <ul>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Dusting, vacuuming &amp; mopping of main living areas</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Kitchen &amp; bathroom wipe-down and sanitizing</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Trash removal &amp; surface tidying</li>
            </ul>
            <a href="#quote" className="btn btn-navy" style={{width: '100%'}}>Request a Standard Clean</a>
          </div>
          <div className="price-card reveal">
            <h3>Move-In / Move-Out Clean</h3>
            <div className="amount"><span>Starting At&nbsp;</span>$210</div>
            <ul>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Inside &amp; outside of cabinets and closets</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Appliance interiors &amp; exteriors</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Walls &amp; door frames spot-cleaned</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Floors detailed edge-to-edge</li>
            </ul>
            <a href="#quote" className="btn btn-navy" style={{width: '100%'}}>Request a Move-In / Move-Out</a>
          </div>
        </div>
      </div>
    </section>
  );
}
