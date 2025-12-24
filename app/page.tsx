"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import BookSection from "@/components/BookSection";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnnouncementPopup from "@/components/AnnouncementPopup";
import WishTicker from "@/components/WishTicker";
import RelaxButton from "@/components/RelaxButton";
import BmiCalculator from "@/components/BmiCalculator";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <BmiCalculator />
      <BookSection />
      <Gallery />
      <Contact />
      <WishTicker />
      <Footer />
      <AnnouncementPopup />
      <RelaxButton />
    </main>
  );
}
