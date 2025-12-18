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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <BookSection />
      <Gallery />
      <Contact />
      <WishTicker />
      <Footer />
      <AnnouncementPopup />
    </main>
  );
}
