'use client';

import { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
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

  const education = {
    degree: 'Bachelor of Engineering (BE)',
    stream: 'Electronics and Computer Engineering',
    university: 'Thapar University of Engineering and Technology',
    location: 'Patiala, Punjab, India',
    duration: '2020 - 2024',
    grade: 'First Class with Distinction',
    achievements: [
      'Dean\'s List for Academic Excellence',
      'Best Project Award in Final Year',
      'Active Member of Technical Society',
      'Participated in Multiple Hackathons'
    ]
  };

  const skills = [
    { category: 'Programming', items: ['C++', 'Python', 'JavaScript', 'Java'] },
    { category: 'Web Technologies', items: ['React', 'Node.js', 'Next.js', 'TypeScript'] },
    { category: 'Electronics', items: ['Circuit Design', 'Embedded Systems', 'IoT', 'Arduino'] },
    { category: 'Tools & Platforms', items: ['Git', 'Docker', 'AWS', 'MongoDB'] }
  ];

  return (
    <section id="education" className="py-20 bg-black/20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-accent">Education</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Academic foundation that shaped my technical expertise and problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Education Details */}
          <div className="reveal">
            <div className="glass-card p-8 card-3d">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-accent to-accent-secondary p-4 rounded-xl shadow-lg">
                  <GraduationCap className="text-white" size={32} />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-white">{education.degree}</h3>
                  <p className="text-accent text-lg font-medium">{education.stream}</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-300">
                  <Award className="mr-3 text-accent" size={20} />
                  <span className="font-medium">{education.university}</span>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <MapPin className="mr-3 text-accent" size={20} />
                  <span>{education.location}</span>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <Calendar className="mr-3 text-accent" size={20} />
                  <span>{education.duration}</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-accent/20 to-accent-secondary/20 p-4 rounded-lg mb-6">
                <h4 className="text-white font-semibold mb-2">Academic Performance</h4>
                <p className="text-accent font-medium">{education.grade}</p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Key Achievements</h4>
                <ul className="space-y-2">
                  {education.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="reveal">
            <h3 className="text-2xl font-bold text-white mb-6">Technical Skills Acquired</h3>
            <div className="grid gap-6">
              {skills.map((skillGroup, index) => (
                <div
                  key={skillGroup.category}
                  className="glass-card p-6 card-3d"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-accent to-accent-secondary rounded-full mr-3"></div>
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="bg-gradient-to-r from-accent/20 to-accent-secondary/20 text-accent px-3 py-1 rounded-full text-sm font-medium border border-accent/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* University Stats */}
        <div className="mt-16 reveal">
          <div className="glass-card p-8 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">4</div>
                <div className="text-gray-300">Years of Study</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-secondary mb-2">50+</div>
                <div className="text-gray-300">Courses Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <div className="text-gray-300">Projects Built</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-secondary mb-2">2024</div>
                <div className="text-gray-300">Graduation Year</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;