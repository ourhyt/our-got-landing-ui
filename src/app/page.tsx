import { EventsSection } from "@/components/EventsSection";
import { GallerySection } from "@/components/GallerySection";
import { SetsSection } from "@/components/SetsSection";
import { HeroSection } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import { DjsSection } from "@/components/DjsSection";

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
      <HeroSection />
      <EventsSection />
      <SetsSection />
      <DjsSection />
      <GallerySection />
      <Footer />
    </>
  );
}