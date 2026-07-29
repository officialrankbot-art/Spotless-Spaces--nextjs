export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-brand"><img src="/logo.jpg" alt="Spotless Spaces logo"/> Spotless Spaces</div>
            <p style={{maxWidth: '280px', fontSize: '.9rem'}}>Trusted residential &amp; commercial cleaning across Minnesota. Licensed, insured, and background-checked.</p>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li>612-260-4646</li>
              <li>info@spotlessspaces-cleaning.com</li>
              <li>Minnesota</li>
            </ul>
          </div>
          <div>
            <h5>Hours</h5>
            <ul>
              <li>Mon–Fri: 9am – 5pm</li>
              <li>Saturday: Closed</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Spotless Spaces. All rights reserved.</span>
          <span>Licensed &amp; Insured</span>
        </div>
      </div>
    </footer>
  );
}
