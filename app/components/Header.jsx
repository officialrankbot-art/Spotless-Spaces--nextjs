export default function Header() {
  return (
    <header>
      <div className="wrap">
        <nav>
          <a href="#top" className="brand"><img src="/logo.jpg" alt="Spotless Spaces logo"/> Spotless Spaces</a>
          <div className="navlinks">
            <a href="#values">Values</a>
            <a href="#types-of-clean">Services</a>
            <a href="#services">What We Offer</a>
            <a href="#pricing">Pricing</a>
            <a href="#difference">Difference</a>
            <a href="#reviews">Reviews</a>
            <a href="#faq">FAQ</a>
            <a href="#careers">Careers</a>
          </div>
          <div className="nav-cta">
            <a href="#quote" className="btn btn-navy" style={{padding: '11px 22px'}}>Book Now</a>
            <button className="menu-btn" id="menu-toggle" aria-label="Open menu" aria-expanded="false">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
            </button>
          </div>
        </nav>
      </div>
      <div className="mobile-menu" id="mobile-menu">
        <a href="#values">Our Values</a>
        <a href="#types-of-clean">Services</a>
        <a href="#services">What We Offer</a>
        <a href="#pricing">Pricing</a>
        <a href="#difference">Our Difference</a>
        <a href="#reviews">Reviews</a>
        <a href="#faq">FAQ</a>
        <a href="#careers">Careers</a>
        <span className="mnav-phone">612-260-4646</span>
        <a href="#quote" className="btn btn-navy">Book Now</a>
      </div>
    </header>
  );
}
