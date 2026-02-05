import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SectionSkeleton from '@/components/SectionSkeleton';

// Lazy load below-fold components for faster initial load
const Features = dynamic(() => import('@/components/Features'), {
  loading: () => <SectionSkeleton />,
});

const Commands = dynamic(() => import('@/components/Commands'), {
  loading: () => <SectionSkeleton />,
});

const Stats = dynamic(() => import('@/components/Stats'), {
  loading: () => <SectionSkeleton />,
});

const Premium = dynamic(() => import('@/components/Premium'), {
  loading: () => <SectionSkeleton />,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div style={{ height: '300px' }} />,
});

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

