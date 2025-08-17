'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* 3D floating shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-32 h-32 bg-accent/20 rounded-full animate-rotate3d"
          style={{
            top: '20%',
            left: '10%',
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
          }}
        />
        <div
          className="absolute w-24 h-24 bg-secondary/20 rounded-lg animate-pulse3d"
          style={{
            top: '60%',
            right: '15%',
            transform: `translate(${mousePosition.x * -0.1}px, ${mousePosition.y * -0.1}px)`,
          }}
        />
        <div
          className="absolute w-16 h-16 bg-white/10 rounded-full animate-float"
          style={{
            bottom: '30%',
            left: '20%',
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hi, I'm <span className="text-accent">Siddhartha</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Full Stack Developer & Data Scientist
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            I create amazing digital experiences with modern technologies.
            Passionate about clean code, beautiful design, and innovative solutions.
          </p>
        </div>

        <div className="animate-slide-up flex justify-center space-x-6 mb-8">
          <a
            href="#contact"
            className="glass-card px-8 py-4 text-white hover:bg-accent hover:text-white transition-all duration-300 card-3d"
          >
            Get In Touch
          </a>
          <a
            href="https://drive.google.com/file/d/1iGxVPB29icPqw-9WY73u-PYZw2IrlD_u/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card px-8 py-4 text-white hover:bg-secondary hover:text-white transition-all duration-300 card-3d"
          >
            View Resume
          </a>
          <a
            href="#portfolio"
            className="glass-card px-8 py-4 text-white hover:bg-secondary hover:text-white transition-all duration-300 card-3d"
          >
            View Work
          </a>
        </div>

        <div className="animate-slide-up flex justify-center space-x-6">
          <a
            href="https://github.com"
            className="glass-card p-4 text-white hover:text-accent transition-all duration-300 card-3d"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            className="glass-card p-4 text-white hover:text-accent transition-all duration-300 card-3d"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:john@example.com"
            href="mailto:siddharthajaiswal166@gmail.com"
            className="glass-card p-4 text-white hover:text-accent transition-all duration-300 card-3d"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white" size={32} />
      </div>
    </section>
  );
};

export default Hero;