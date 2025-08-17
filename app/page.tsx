'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Certifications from '@/components/Certifications';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <ThemeToggle />
      <Hero />
      <About />
      <Certifications />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
