import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import GallerySection from "@/components/GallerySection";
import SetsSection from "@/components/SetsSection";
import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <AboutSection />
      <EventsSection />
      <SetsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </>
  );
}