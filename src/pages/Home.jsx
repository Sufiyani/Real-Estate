import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import PropertyList from "../components/PropertyList";
import ContactSection from "../components/ContactSection";
import PropertyTypeSection from '../components/PropertyTypeSection';
import BuySellSection from '../components/BuySellSection';
import AgentSection from '../components/AgentSection';
import Testmonials from '../components/Testmonials';
import PartnerSection from '../components/PartnerSection';
import Footer from '../components/Footer'


function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SearchBar />
      <PropertyList />
      <ContactSection/>
        <PropertyTypeSection />
         <BuySellSection />
            <AgentSection />
            <Testmonials/>
                <PartnerSection/>
                <Footer/>
    </div>
  );
}

export default Home;
