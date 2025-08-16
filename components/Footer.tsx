'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/40 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
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
              href="mailto:siddharthajaiswal166@gmail.com"
              className="glass-card p-4 text-white hover:text-accent transition-all duration-300 card-3d"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="border-t border-white/20 pt-8">
            <p className="text-gray-400 flex items-center justify-center space-x-1">
              <span>&copy; {currentYear} Siddhartha. Made with</span>
              <Heart className="text-accent animate-pulse" size={16} />
              <span>and lots of coffee.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;