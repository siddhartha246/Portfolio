'use client';

import { useEffect, useRef } from 'react';
import { Code, Palette, Server, Smartphone } from 'lucide-react';

import { GraduationCap, Building2, Calendar } from 'lucide-react';

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
      title: 'AI/ML Development',
      description: 'Python, TensorFlow, PyTorch, Scikit-learn',
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
                Fresh graduate from Thapar University with a passion for technology
                and innovation. I specialize in building scalable applications with 
                modern technologies and love
                turning complex problems into simple, beautiful designs.
              </p>
              <p className="text-gray-300">
                Currently pursuing Electronics and Computer Engineering, which gives me a unique
                perspective on both hardware and software development, allowing me to
                create comprehensive solutions.
              </p>
            </div>
          </div>

          <div className="reveal">
            <div className="glass-card p-8 card-3d">
              <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <GraduationCap className="text-accent" size={20} />
                    <h4 className="text-white font-semibold">Degree</h4>
                  </div>
                  <p className="text-gray-300">Bachelor of Engineering (BE)</p>
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <GraduationCap className="text-accent" size={20} />
                    <h4 className="text-white font-semibold">Stream</h4>
                  </div>
                  <p className="text-gray-300">Electronics and Computer Engineering</p>
                </div>
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <Building2 className="text-accent" size={20} />
                    <h4 className="text-white font-semibold">University</h4>
                  </div>
                  <p className="text-gray-300">Thapar University of Engineering and Technology</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <Calendar className="text-gray-400" size={16} />
                    <span className="text-gray-400 text-sm">2022 - 2026</span>
                  </div>
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
                  className="bg-gradient-to-r from-accent to-accent-secondary h-2 rounded-full transition-all duration-1000"
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