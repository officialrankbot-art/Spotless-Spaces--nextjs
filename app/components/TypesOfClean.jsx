export default function TypesOfClean() {
  return (
    <section id="types-of-clean" style={{background: 'var(--mist)'}}>
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Types of Clean</span>
          <h2>Find the right clean for your space</h2>
          <p>We keep our lineup simple and focused — just a few clear services, so booking never feels like a guessing game.</p>
        </div>
        <div className="checklist-note reveal" style={{marginBottom: '28px'}}>
          <div className="icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 014-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg></div>
          <p>New clients start with a Deep Clean to get every space fully reset — after that, we recommend Standard Cleans to keep things maintained on an ongoing basis.</p>
        </div>
        <div className="types-grid">
          <div className="type-card reveal">
            <span className="freq">Available one-time, bi-weekly, or monthly</span>
            <h3>Deep Clean</h3>
            <p className="desc">A thorough, top-to-bottom clean that tackles dirt and grime in every hard-to-reach spot.</p>
            <ul>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Dusting, vacuuming, mopping &amp; surfaces</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Exterior appliances wiped &amp; sanitized</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Baseboards, vents &amp; light fixtures</li>
            </ul>
            <a href="/Deep_Clean_Checklist.pdf" target="_blank" rel="noopener" className="card-link">See full checklist</a>
          </div>
          <div className="type-card reveal">
            <span className="freq">Recommended as ongoing maintenance</span>
            <h3>Standard Clean</h3>
            <p className="desc">Our go-to upkeep clean once your space has had its first Deep Clean — keeps everything fresh on a regular schedule.</p>
            <ul>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Dusting, vacuuming &amp; mopping of main living areas</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Kitchen &amp; bathroom wipe-down and sanitizing</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Trash removal &amp; surface tidying</li>
            </ul>
            <a href="/Standard_Clean_Checklist.pdf" target="_blank" rel="noopener" className="card-link">See full checklist</a>
          </div>
          <div className="type-card reveal">
            <span className="freq">Recommended for move day</span>
            <h3>Move-In / Move-Out Clean</h3>
            <p className="desc">A full, top-to-bottom detail clean of an empty (or nearly empty) space — built to satisfy landlord and buyer inspections.</p>
            <ul>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Inside &amp; outside of all cabinets and closets</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Appliance interiors &amp; exteriors</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Walls &amp; door frames spot-cleaned</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Floors detailed edge-to-edge</li>
            </ul>
            <a href="/Move-In_Move-Out_Clean_Checklist.pdf" target="_blank" rel="noopener" className="card-link">See full checklist</a>
          </div>
          <div className="type-card reveal">
            <span className="freq freq-commercial">Custom schedule</span>
            <h3>Commercial Clean</h3>
            <p className="desc">Scheduled service for offices, retail, and other business spaces, tailored to your hours and foot traffic.</p>
            <ul>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Offices, lobbies &amp; break rooms</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Restroom sanitizing &amp; restocking</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>Floor care for carpet &amp; hard surfaces</li>
              <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>After-hours &amp; weekend scheduling</li>
            </ul>
          </div>
        </div>
        <div className="checklist-note reveal">
          <div className="icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg></div>
          <p>Every booking includes a clear checklist upfront, so you always know exactly what's covered.</p>
        </div>
      </div>
    </section>
  );
}
