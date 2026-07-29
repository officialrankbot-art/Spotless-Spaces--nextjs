import Header from './components/Header';
import Hero from './components/Hero';
import Values from './components/Values';
import WhatWeOffer from './components/WhatWeOffer';
import TypesOfClean from './components/TypesOfClean';
import QuoteBuilder from './components/QuoteBuilder';
import Pricing from './components/Pricing';
import Walkthrough from './components/Walkthrough';
import Difference from './components/Difference';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Careers from './components/Careers';
import Footer from './components/Footer';
import SiteScripts from './components/SiteScripts';

export default function Home() {
  return (
    <>
      <Header />
      <div id="top"></div>
      <Hero />
      <Values />
      <WhatWeOffer />
      <TypesOfClean />
      <QuoteBuilder />
      <Pricing />
      <Walkthrough />
      <Difference />
      <Reviews />
      <FAQ />
      <FinalCTA />
      <Careers />
      <Footer />
      <SiteScripts />
    </>
  );
}
