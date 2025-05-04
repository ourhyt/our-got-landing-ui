import { AboutSection } from "@/components/AboutSection";
import { EventsSection } from "@/components/EventsSection";
import { GallerySection } from "@/components/GallerySection";
import { SetsSection } from "@/components/SetsSection";
import { Hero } from "@/components/Hero";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Navbar} from "@/components/Navbar";
import { Metadata } from "next";

export const dynamic = 'force-static' // 🔒 Garantiza que sea SSG

export const metadata: Metadata = {
  title: 'Ourhyt | Cultura Melodic & Peak Techno',
  description: 'Descubre eventos, sets, DJs y más de la escena techno en Colombia con Ourhyt.',
  openGraph: {
    title: 'Ourhyt | Cultura Melodic & Peak Techno',
    description: 'Descubre eventos, sets, DJs y más de la escena techno en Colombia con Ourhyt.',
    url: 'https://ourhyt.com',
    siteName: 'Ourhyt',
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ourhyt | Cultura Melodic & Peak Techno',
    description: 'Explora la cultura techno con eventos, sets, podcasts y más.',
  },
}

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