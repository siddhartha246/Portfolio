'use client';

import { useEffect, useRef } from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const certifications = [
    {
      title: 'Full-stack Web Development Bootcamp',
      issuer: 'Udemy',
      date: '2025',
      credentialId: 'UC-c6e69934-cc7d-4e1f-91ec-613e0112Iab0',
      description: 'Skilled in building complete web applications from front-end to back-end with database integration and deployment',
      verifyUrl: 'https://www.udemy.com/certificate/UC-c6e69934-cc7d-4e1f-91ec-613e01121ab0/',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      title: 'AI/ML for geodata analysis',
      issuer: 'ISRO/IIRS',
      date: '2024',
      credentialId: 'RxAIpQNALW',
      description: 'Certified in AIML for Geodata Analysis by ISRO, specializing in AI/ML applications for geospatial data and remote sensing',
      verifyUrl: 'https://isrolms.iirs.gov.in/mod/customcert/verify_certificate.php?code=RxAIpQNALW&qrcode=1',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Data Science Job Simulation',
      issuer: 'BCGX',
      date: '2025',
      credentialId: 'HbZyHq9DsBRg2C76G',
      description: 'Demonstrated advanced data analytics skills by identifying essential client data and outlining a strategic investigation approach',
      verifyUrl: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/Tcz8gTtprzAS4xSoK_SKZxezskWgmFjRvj9_NPwQai6r4H33jtCA4_1755377728310_completion_certificate.pdf',
      color: 'from-blue-600 to-indigo-600',
    },
    {
      title: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: '2024',
      credentialId: 'CKA-2024-123',
      description: 'Advanced skills in Kubernetes cluster administration',
      verifyUrl: 'https://www.cncf.io/certification',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-black/30" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-accent">Certifications</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Industry-recognized certifications that validate my expertise in modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.credentialId}
              className="reveal glass-card p-8 card-3d group hover:bg-white/5 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${cert.color} shadow-lg`}>
                  <Award className="text-white" size={32} />
                </div>
                <div className="text-right">
                  <div className="flex items-center text-gray-400 text-sm mb-1">
                    <Calendar size={14} className="mr-1" />
                    {cert.date}
                  </div>
                  <div className="text-xs text-gray-500 font-mono">
                    ID: {cert.credentialId}
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                {cert.title}
              </h3>
              
              <p className="text-lg text-gray-300 mb-3 font-medium">
                {cert.issuer}
              </p>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {cert.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">Verified</span>
                </div>
                
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-accent hover:text-white transition-colors group/link"
                >
                  <span className="text-sm font-medium">Verify</span>
                  <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Decorative gradient border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;