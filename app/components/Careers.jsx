export default function Careers() {
  return (
    <section id="careers" style={{background: 'var(--mist)'}}>
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="eyebrow">Join Our Team</span>
          <h2>Looking for cleaning work?</h2>
          <p>We're always looking for reliable, detail-oriented people to join our crew. Fill out the quick form below and we'll reach out to set up an interview.</p>
        </div>
        <div className="reveal" style={{maxWidth: '640px', margin: '0 auto', background: '#fff', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', padding: '48px', textAlign: 'center'}}>
          <p style={{margin: '0 0 24px', color: 'var(--slate)'}}>Takes about two minutes — tell us about yourself and we'll follow up to schedule a time to talk.</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSebX0PDCYTq-yIdBcImGxxrsxk8taScX4v3cvaVG_NDPHxvbw/viewform" target="_blank" rel="noopener" className="btn btn-gold">Apply Now</a>
        </div>
      </div>
    </section>
  );
}
