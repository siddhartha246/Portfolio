'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import AdminPanel from '@/components/AdminPanel';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <ThemeToggle />
      <AdminPanel />
      <Hero />
      <About />
      <Certifications />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}