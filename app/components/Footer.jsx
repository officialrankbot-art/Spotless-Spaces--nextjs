export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-brand"><img src="/logo.jpg" alt="Spotless Spaces logo"/> Spotless Spaces</div>
            <p style={{maxWidth: '280px', fontSize: '.9rem'}}>Commercial and janitorial cleaning, plus residential service, in Montgomery County, Bucks County, and the Main Line, PA. Licensed and insured.</p>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><a href="/commercial-cleaning">Commercial Cleaning</a></li>
              <li><a href="/daycare-cleaning">Daycare Cleaning</a></li>
              <li><a href="/car-dealership-cleaning">Car Dealership Cleaning</a></li>
              <li><a href="/warehouse-cleaning">Warehouse Cleaning</a></li>
              <li><a href="/#residential">Residential Cleaning</a></li>
              <li><a href="/#walkthrough">Free Walkthrough</a></li>
              <li><a href="/#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li><a href="tel:+12676621878">267-662-1878</a></li>
              <li><a href="mailto:info@spotlessspaces-cleaning.com">info@spotlessspaces-cleaning.com</a></li>
              <li>North Wales, PA</li>
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
          <div>
            <h5>Service Areas</h5>
            <ul>
              <li>North Wales</li>
              <li>Ambler</li>
              <li>Blue Bell</li>
              <li>Gwynedd / Gwynedd Valley</li>
              <li>Horsham</li>
              <li>Plymouth Meeting</li>
              <li>Fort Washington</li>
              <li>The Main Line</li>
              <li>Montgomery County</li>
              <li>Bucks County &amp; Surrounding Areas</li>
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
