export default function Header() {
  return (
    <header>
      <div className="wrap">
        <nav>
          <a href="/" className="brand">
            <img src="/logo.jpg" alt="Spotless Spaces logo"/> Spotless Spaces
          </a>
          <div className="navlinks">
            <a href="/commercial-cleaning">Commercial</a>
            <a href="/#industries">Industries</a>
            <a href="/#values">Why Us</a>
            <a href="/#residential">Residential</a>
            <a href="/#faq">FAQ</a>
            <a href="/#careers">Careers</a>
          </div>
          <div className="nav-cta">
            <a href="/#walkthrough" className="btn btn-navy" style={{padding: '11px 22px'}}>Free Walkthrough</a>
            <button className="menu-btn" id="menu-toggle" aria-label="Open menu" aria-expanded="false">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
            </button>
          </div>
        </nav>
      </div>
      <div className="mobile-menu" id="mobile-menu">
        <a href="/commercial-cleaning">Commercial Cleaning</a>
        <a href="/#industries">Industries</a>
        <a href="/#values">Why Us</a>
        <a href="/#residential">Residential</a>
        <a href="/#faq">FAQ</a>
        <a href="/#careers">Careers</a>
        <a href="tel:+12676621878" className="mnav-phone">267-662-1878</a>
        <a href="/#walkthrough" className="btn btn-navy">Request a Free Walkthrough</a>
      </div>
    </header>
  );
}
