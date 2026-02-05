import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Commands from '@/components/Commands';
import Stats from '@/components/Stats';
import Premium from '@/components/Premium';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Commands />
        <Stats />
        <Premium />
      </main>
      <Footer />
    </>
  );
}

