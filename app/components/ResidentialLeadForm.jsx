// Residential lead questionnaire. Submissions go to Netlify Forms as
// "residential-lead" (registered in public/__forms.html), where email
// notifications can be turned on. Submit behavior lives in SiteScripts.jsx.

const textareaStyle = {
  width: '100%', padding: '13px 16px', borderRadius: '14px', border: '1.5px solid var(--line)',
  fontFamily: 'Nunito,sans-serif', fontSize: '.95rem', resize: 'vertical',
};

function Select({ id, name, label, placeholder, options, required }) {
  return (
    <div className="qb-field">
      <label htmlFor={id}>{label}{required ? ' *' : ''}</label>
      <select name={name} id={id} defaultValue="" required={required}>
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

export default function ResidentialLeadForm() {
  return (
    <section id="quote">
      <div className="wrap">
        <div className="section-head center reveal" style={{maxWidth: '640px'}}>
          <span className="eyebrow">Residential Cleaning</span>
          <h2>Request a home cleaning quote</h2>
          <p>Answer a few quick questions about your home and we&apos;ll get back to you with a quote and available dates. Cleaning a business? <a href="#walkthrough" style={{color: 'var(--sky-600)', fontWeight: 700, textDecoration: 'underline'}}>Request a free walkthrough</a> instead.</p>
        </div>
        <div className="quote-wrap reveal" style={{maxWidth: '640px', margin: '0 auto'}}>
          <div className="quote-card">
            <div id="residential-form">
              <form name="residential-lead" data-netlify="true" netlify-honeypot="bot-field" id="residential-form-tag">
                <input type="hidden" name="form-name" value="residential-lead" />
                <input type="hidden" name="subject" value="New Residential Lead Form" />
                <div style={{position: 'absolute', left: '-9999px'}} aria-hidden="true">
                  <label>Leave this field blank<input name="bot-field" tabIndex="-1" autoComplete="off" /></label>
                </div>

                <div className="qb-row2">
                  <div className="qb-field"><label htmlFor="r-name">Full name *</label><input type="text" name="name" id="r-name" placeholder="Jamie Rivera" autoComplete="name" required/></div>
                  <div className="qb-field"><label htmlFor="r-phone">Phone *</label><input type="tel" name="phone" id="r-phone" placeholder="(555) 555-0100" autoComplete="tel" required/></div>
                </div>
                <div className="qb-row2">
                  <div className="qb-field"><label htmlFor="r-email">Email</label><input type="email" name="email" id="r-email" placeholder="jamie@email.com" autoComplete="email"/></div>
                  <div className="qb-field"><label htmlFor="r-address">Home address or zip code *</label><input type="text" name="address" id="r-address" placeholder="123 Oak Ln, Ambler, PA 19002" autoComplete="street-address" required/></div>
                </div>

                <div className="qb-row2">
                  <Select id="r-clean-type" name="clean-type" label="Type of clean" placeholder="Select a type of clean" options={[
                    'Deep clean', 'Standard clean', 'Move-in / move-out clean', 'Not sure yet',
                  ]}/>
                  <Select id="r-frequency" name="frequency" label="How often?" placeholder="Select a frequency" options={[
                    'One-time', 'Weekly', 'Every other week', 'Monthly', 'Not sure yet',
                  ]}/>
                </div>
                <div className="qb-row2">
                  <Select id="r-bedrooms" name="bedrooms" label="Bedrooms" placeholder="Select bedrooms" options={[
                    'Studio', '1', '2', '3', '4', '5', '6+',
                  ]}/>
                  <Select id="r-bathrooms" name="bathrooms" label="Bathrooms" placeholder="Select bathrooms" options={[
                    '1', '1.5', '2', '2.5', '3', '3.5', '4+',
                  ]}/>
                </div>
                <div className="qb-row2">
                  <div className="qb-field"><label htmlFor="r-sqft">Approx. square footage</label><input type="text" name="sqft" id="r-sqft" placeholder="e.g. 1,800 sq ft (optional)"/></div>
                  <div className="qb-field"><label htmlFor="r-date">Preferred date</label><input type="date" name="date" id="r-date"/></div>
                </div>
                <div className="qb-field">
                  <label htmlFor="r-notes">Anything else we should know?</label>
                  <textarea name="notes" id="r-notes" rows="3" placeholder="Pets, areas to focus on, add-ons like inside the oven or fridge, access details, etc." style={textareaStyle}></textarea>
                </div>
                <p id="residential-error" style={{display: 'none', color: '#b42318', fontSize: '.9rem', fontWeight: 700, margin: '0 0 10px'}}>Please fill in your name, phone number, and address or zip code.</p>
                <button type="button" className="btn btn-gold" id="residential-submit" style={{width: '100%', marginTop: '6px'}}>Request My Quote</button>
              </form>
            </div>
            <div id="residential-confirm" style={{display: 'none', textAlign: 'center', padding: '20px 0'}}>
              <div className="confirm-check"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg></div>
              <h3>Thanks, <span id="residential-confirm-name">there</span>!</h3>
              <p style={{color: 'var(--slate)', maxWidth: '400px', margin: '0 auto'}}>We got your request and will reach out shortly with a quote and available dates.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
