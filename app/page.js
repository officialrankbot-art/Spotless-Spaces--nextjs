import Header from './components/Header';
import Hero from './components/Hero';
import Values from './components/Values';
import WhatWeOffer from './components/WhatWeOffer';
import TypesOfClean from './components/TypesOfClean';
import ResidentialLeadForm from './components/ResidentialLeadForm';
import Pricing from './components/Pricing';
import Walkthrough from './components/Walkthrough';
import CommercialIndustries from './components/CommercialIndustries';
import Difference from './components/Difference';
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
      <CommercialIndustries />
      <Walkthrough />
      <Values />
      <Difference />
      <TypesOfClean />
      <Pricing />
      <ResidentialLeadForm />
      <WhatWeOffer />
      <FAQ />
      <FinalCTA />
      <Careers />
      <Footer />
      <SiteScripts />
    </>
  );
}
