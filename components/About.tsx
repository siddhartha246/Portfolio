'use client';

import { useEffect, useRef } from 'react';
import { Code, Palette, Server, Smartphone } from 'lucide-react';

const About = () => {
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

  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'React, Next.js, TypeScript, Tailwind CSS',
      progress: 90,
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Node.js, Python, PostgreSQL, MongoDB',
      progress: 85,
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Figma, Adobe XD, Responsive Design',
      progress: 80,
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'React Native, Flutter, PWA',
      progress: 75,
    },
  ];

  return (
    <section id="about" className="py-20 bg-black/20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with 5+ years of experience
            creating digital solutions that make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="reveal">
            <div className="glass-card p-8 card-3d">
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 mb-6">
                Started as a curious developer exploring the web, now I specialize
                in building scalable applications with modern technologies. I love
                turning complex problems into simple, beautiful designs.
              </p>
              <p className="text-gray-300">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open source, or mentoring other developers.
              </p>
            </div>
          </div>

          <div className="reveal">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-r from-accent to-secondary rounded-full animate-pulse3d opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass-card p-8 text-center">
                  <div className="text-4xl font-bold text-accent">5+</div>
                  <div className="text-white">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="reveal glass-card p-6 text-center card-3d"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4 animate-pulse3d">
                <skill.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{skill.description}</p>
              
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-accent to-secondary h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.progress}%` }}
                ></div>
              </div>
              <div className="text-accent text-sm mt-2 font-semibold">
                {skill.progress}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;