'use client';

import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  github?: string;
  live?: string;
}

const Portfolio = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Settle-up',
      description: 'Expense tracking app that record, split, and settle shared expenses with automated debt calculations and minimized transactions.',
      image: '/pro.png',
      technologies: ['React', 'Node.js', 'MongoDB'],
      category: 'fullstack',
      github: 'https://github.com/siddhartha246/SettleUp.git',
    },
    {
      id: 2,
      title: 'Employee Attrition Prediction',
      description: 'Built a churn prediction model to identify employees likely to leave a bank using historical data. Applied machine learning techniques with TensorFlow for effective classification and retention insights.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Tensorflow', 'Scikit-learn'],
      category: 'AI/ML',
      github: 'https://github.com/siddhartha246/Employee-Attrition-Prediction.git',
    },
    {
      id: 3,
      title: 'Stock Dashboard',
      description: 'Analytics dashboard for stock performance with interactive charts and real-time data visualization.',
      image: '/Dashboard 1.png',
      technologies: ['Tableau', 'Python', 'SQL'],
      category: 'Data-visualization',
      github: 'https://github.com/siddhartha246/Stock-dashboard.git',
    },
    {
      id:4,
      title:'EcoBin-smart waste management system',
      description:'Built a smart waste management platform that leveraged Gemini AI for waste verification',
      image:'/EcoBin.png',
      technologies:['React.js, Postgresdb, JavaScript'],
      category:'fullstack',
      live: 'https://eco-bin-delta.vercel.app/report',
    },
    
  ];

  const categories = ['all', 'AI/ML', 'Data-visualization', 'fullstack'];

  useEffect(() => {
    // Initialize with all projects
    setFilteredProjects(projects);
  }, []);

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
  }, [filteredProjects]);

  const filterProjects = (category: string) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  return (
    <section id="portfolio" className="py-20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-accent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center mb-12 reveal">
          <div className="glass-card p-2 inline-flex space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => filterProjects(category)}
                className={`px-6 py-2 rounded-lg transition-all duration-300 capitalize ${
                  activeFilter === category
                    ? 'bg-accent text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="reveal glass-card overflow-hidden card-3d group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card p-3 text-white hover:text-accent transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card p-3 text-white hover:text-accent transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-accent/20 text-white px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
