export default function QuoteBuilder() {
  return (
    <section id="quote" style={{background: 'var(--paper)'}}>
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow">Book Online</span>
          <h2>Get your instant estimate</h2>
          <p>Answer four quick questions — no account, no phone call required.</p>
        </div>
        <div className="quote-wrap reveal" style={{maxWidth: '720px', margin: '0 auto'}}>
          <div className="quote-card">
            <div className="qb-steps">
              <div className="qb-step-dot active" data-dot="1"></div>
              <div className="qb-step-dot" data-dot="2"></div>
              <div className="qb-step-dot" data-dot="3"></div>
              <div className="qb-step-dot" data-dot="4"></div>
            </div>

            {/* STEP 1 */}
            <div className="qb-step" data-step="1">
              <div className="qb-label">Step 1 of 4 — What kind of clean?</div>
              <div className="qb-options cols-3">
                <div className="qb-opt" data-field="service" data-value="ResidentialDeep">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>
                  Residential — Deep Clean
                </div>
                <div className="qb-opt" data-field="service" data-value="ResidentialMove">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="8" width="13" height="10"/><path d="M16 11h3l2 3v4h-5"/><circle cx="7.5" cy="18.5" r="1.5"/><circle cx="17.5" cy="18.5" r="1.5"/></svg>
                  Residential — Move-In / Move-Out
                </div>
                <div className="qb-opt" data-field="service" data-value="Commercial">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="3" width="16" height="18"/><path d="M9 21v-4h6v4"/><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1"/></svg>
                  Commercial
                </div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="qb-step" data-step="2" style={{display: 'none'}}>
              <div className="qb-label">Step 2 of 4 — Approximate Size</div>
              <div className="qb-options cols-4" id="size-options"></div>
            </div>

            {/* STEP 3 */}
            <div className="qb-step" data-step="3" style={{display: 'none'}}>
              <div className="qb-label">Step 3 of 4 — How Often?</div>
              <div className="qb-options cols-4">
                <div className="qb-opt" data-field="frequency" data-value="One-time" data-mult="1">One-time</div>
                <div className="qb-opt" data-field="frequency" data-value="Weekly" data-mult="1">Weekly</div>
                <div className="qb-opt" data-field="frequency" data-value="Bi-weekly" data-mult="1">Bi-weekly</div>
                <div className="qb-opt" data-field="frequency" data-value="Monthly" data-mult="1">Monthly</div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="qb-step" data-step="4" style={{display: 'none'}}>
              <div className="qb-label">Step 4 of 4 — Your Details</div>
              <div className="estimate-box">
                <div style={{fontFamily: 'Nunito,sans-serif', fontSize: '.75rem', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--slate)'}}>Estimated Price</div>
                <div className="amt" id="estimate-amt">$0</div>
                <div style={{fontSize: '.82rem', color: 'var(--slate)'}}>Final price confirmed after a quick walkthrough or photos</div>
              </div>
              <div className="qb-row2">
                <div className="qb-field"><label>Full name</label><input type="text" id="q-name" placeholder="Jamie Rivera"/></div>
                <div className="qb-field"><label>Phone or email</label><input type="text" id="q-contact" placeholder="(555) 555-0100"/></div>
              </div>
              <div className="qb-row2">
                <div className="qb-field"><label>Zip code</label><input type="text" id="q-zip" placeholder="19107"/></div>
                <div className="qb-field"><label>Preferred date</label><input type="date" id="q-date"/></div>
              </div>
            </div>

            {/* CONFIRMATION */}
            <div className="qb-step" data-step="confirm" style={{display: 'none', textAlign: 'center', padding: '20px 0'}}>
              <div className="confirm-check"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg></div>
              <h3>Request received, <span id="confirm-name">there</span>!</h3>
              <p style={{color: 'var(--slate)', maxWidth: '400px', margin: '0 auto'}}>A Spotless Spaces coordinator will text or call within one business hour to confirm your <span id="confirm-details">visit</span>.</p>
            </div>

            <div className="qb-nav" id="qb-nav">
              <span className="qb-back" id="qb-back">&larr; Back</span>
              <button className="btn btn-navy" id="qb-next" disabled>Continue</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
