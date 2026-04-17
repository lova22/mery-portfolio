import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Research from '@/components/Research';
import Publications from '@/components/Publications';
import MediaSection from '@/components/MediaSection';
import Leadership from '@/components/Leadership';
import Students from '@/components/Students';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'fr'}, {locale: 'ar'}];
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <JsonLd />
      <Navbar />
      <Hero />
      <About />
      <Research />
      <Publications />
      <MediaSection />
      <Students />
      <Leadership />
      <Contact />
      <Footer />
    </main>
  );
}
