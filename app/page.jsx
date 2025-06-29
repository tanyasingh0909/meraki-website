"use client";

import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import CategorySection from "../components/CategorySection";
import AboutSection from "../components/AboutSection";
import EventsSection from "../components/EventsSection";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
export default function Home() {
  return (
 <div className="overflow-x-hidden w-full"> 
    <Header/>
    <HomeSection />
    <AboutSection />
    <EventsSection/>
    <ContactSection/>
    <Footer />
  </div>
  );
}
