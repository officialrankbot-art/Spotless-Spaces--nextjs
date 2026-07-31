export default function Pricing() {
  return (
    <section id="pricing">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow">Pricing</span>
          <h2>Straightforward packages</h2>
          <p>Every tier includes our quality checklist.</p>
        </div>
        <div className="pricing-grid">
          <div className="price-card featured reveal">
            <h3>Deep Clean</h3>
            <div className="amount"><span>Starting At&nbsp;</span>$180</div>
            <ul>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Dusting, vacuuming &amp; mopping</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Exterior appliances wiped &amp; sanitized</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Baseboards, vents &amp; light fixtures</li>
            </ul>
            <a href="#quote" className="btn btn-gold" style={{width: '100%'}}>Choose Deep Clean</a>
          </div>
          <div className="price-card reveal">
            <h3>Move-In / Move-Out Clean</h3>
            <div className="amount"><span>Starting At&nbsp;</span>$360</div>
            <ul>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Inside &amp; outside of cabinets and closets</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Appliance interiors &amp; exteriors</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Walls &amp; door frames spot-cleaned</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Floors detailed edge-to-edge</li>
            </ul>
            <a href="#quote" className="btn btn-navy" style={{width: '100%'}}>Choose Move-In / Move-Out</a>
          </div>
          <div className="price-card reveal">
            <h3>Commercial Cleaning Service</h3>
            <div className="amount">Custom<span>&nbsp;by sq ft</span></div>
            <ul>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Nightly, weekly or custom schedule</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Dedicated account manager</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Supply &amp; consumable restocking</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Certificate of insurance on file</li>
            </ul>
            <a href="#walkthrough" className="btn btn-navy" style={{width: '100%'}}>Get a Free Commercial Cleaning Quotation</a>
          </div>
        </div>
      </div>
    </section>
  );
}
