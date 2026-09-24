export default function Walkthrough() {
  return (
    <section id="walkthrough" style={{background: 'var(--mist)'}}>
      <div className="wrap">
        <div className="section-head center reveal" style={{maxWidth: '640px'}}>
          <span className="eyebrow">Commercial Cleaning</span>
          <h2>Request a Free Walkthrough</h2>
          <p>Tell us about your space and we'll schedule an on-site (or virtual) walkthrough to build your custom commercial cleaning quote.</p>
        </div>
        <div className="quote-wrap reveal" style={{maxWidth: '640px', margin: '0 auto'}}>
          <div className="quote-card">
            <div id="walkthrough-form">
              <form name="commercial-walkthrough" data-netlify="true" netlify-honeypot="bot-field" id="walkthrough-form-tag">
                <input type="hidden" name="form-name" value="commercial-walkthrough" />
                <input type="hidden" name="subject" value="New Commercial Lead Form" />
                <div style={{position: 'absolute', left: '-9999px'}} aria-hidden="true">
                  <label>Leave this field blank<input name="bot-field" tabIndex="-1" autoComplete="off" /></label>
                </div>
                <div className="qb-row2">
                  <div className="qb-field"><label>Business name</label><input type="text" name="business" id="w-business" placeholder="Acme Offices LLC"/></div>
                  <div className="qb-field"><label>Contact name</label><input type="text" name="name" id="w-name" placeholder="Jamie Rivera"/></div>
                </div>
                <div className="qb-row2">
                  <div className="qb-field"><label>Phone or email</label><input type="text" name="contact" id="w-contact" placeholder="(555) 555-0100"/></div>
                  <div className="qb-field"><label>Approx. square footage</label><input type="text" name="sqft" id="w-sqft" placeholder="e.g. 4,500 sq ft"/></div>
                </div>
                <div className="qb-row2">
                  <div className="qb-field"><label>Business address</label><input type="text" name="address" id="w-address" placeholder="123 Main St, Ambler, PA"/></div>
                  <div className="qb-field"><label>Preferred walkthrough date</label><input type="date" name="date" id="w-date"/></div>
                </div>
                <div className="qb-row2">
                  <div className="qb-field"><label htmlFor="w-facility">Facility type</label>
                  <select name="facility-type" id="w-facility" defaultValue="">
                    <option value="" disabled>Select your facility type</option>
                    <option value="Office / professional suite">Office / professional suite</option>
                    <option value="Medical or dental office">Medical or dental office</option>
                    <option value="Optometry / eye care practice">Optometry / eye care practice</option>
                    <option value="Gym / fitness center">Gym / fitness center</option>
                    <option value="Daycare / child care center">Daycare / child care center</option>
                    <option value="Car dealership">Car dealership</option>
                    <option value="Warehouse / light industrial">Warehouse / light industrial</option>
                    <option value="Retail store / showroom">Retail store / showroom</option>
                    <option value="Other (tell us below)">Other (tell us below)</option>
                  </select>
                </div>
                  <div className="qb-field"><label htmlFor="w-frequency">How often do you need service?</label>
                  <select name="frequency" id="w-frequency" defaultValue="">
                    <option value="" disabled>Select a frequency</option>
                    <option value="1x per week">1x per week</option>
                    <option value="2x per week">2x per week</option>
                    <option value="3x per week">3x per week</option>
                    <option value="4x per week">4x per week</option>
                    <option value="5x per week (weekdays)">5x per week (weekdays)</option>
                    <option value="6–7x per week">6–7x per week</option>
                    <option value="Every other week">Every other week</option>
                    <option value="Monthly">Monthly</option>
                    <option value="One-time / not sure yet">One-time / not sure yet</option>
                  </select>
                </div>
                </div>
                <div className="qb-field"><label htmlFor="w-reason">What&apos;s prompting you to look for a cleaning service?</label>
                  <select name="reason" id="w-reason" defaultValue="">
                    <option value="" disabled>Select a reason</option>
                    <option value="Unhappy with current cleaning quality">Unhappy with current cleaning quality</option>
                    <option value="Current provider is unreliable or hard to reach">Current provider is unreliable or hard to reach</option>
                    <option value="Current provider raised prices">Current provider raised prices</option>
                    <option value="Current provider is no longer available">Current provider is no longer available</option>
                    <option value="Opening a new location or moving">Opening a new location or moving</option>
                    <option value="First time hiring a professional cleaner">First time hiring a professional cleaner</option>
                    <option value="Need more frequent or additional services">Need more frequent or additional services</option>
                    <option value="Other (tell us below)">Other (tell us below)</option>
                  </select>
                </div>
                <div className="qb-field">
                  <label>When do you need service in place by?</label>
                  <select name="timeline" id="w-timeline" defaultValue="">
                    <option value="" disabled>Select a timeframe</option>
                    <option value="ASAP (within 1 week)">ASAP (within 1 week)</option>
                    <option value="2–4 weeks">2–4 weeks</option>
                    <option value="1–3 months">1–3 months</option>
                    <option value="Just exploring / no rush">Just exploring / no rush</option>
                  </select>
                </div>
                <div className="qb-field">
                  <label htmlFor="w-notes">Specific cleaning requirements or preferences</label>
                  <textarea name="notes" id="w-notes" rows="3" placeholder="Hours of operation, areas to focus on, products to use or avoid, access or alarm details, etc." style={{width: '100%', padding: '13px 16px', borderRadius: '14px', border: '1.5px solid var(--line)', fontFamily: 'Nunito,sans-serif', fontSize: '.95rem', resize: 'vertical'}}></textarea>
                </div>
                <button type="button" className="btn btn-navy" id="walkthrough-submit" style={{width: '100%', marginTop: '6px'}}>Request Walkthrough</button>
              </form>
            </div>
            <div id="walkthrough-confirm" style={{display: 'none', textAlign: 'center', padding: '20px 0'}}>
              <div className="confirm-check"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg></div>
              <h3>Request received, <span id="walkthrough-confirm-name">there</span>!</h3>
              <p style={{color: 'var(--slate)', maxWidth: '400px', margin: '0 auto'}}>A Spotless Spaces coordinator will be in touch shortly to schedule your walkthrough.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
