import { NextResponse } from 'next/server';

const projects = [
  {
    id: 1,
    title: 'Settle-up',
    description: 'Expense tracking app that record, split, and settle shared expenses with automated debt calculations and minimized transactions.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB'],
    category: 'fullstack',
    github: 'https://github.com/siddhartha246/SettleUp.git',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates and team collaboration features.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    category: 'web',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 3,
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
    image: 'https://images.pexels.com/photos/4968636/pexels-photo-4968636.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
    category: 'mobile',
    github: 'https://github.com',
  },
  {
    id: 4,
    title: 'Stock Dashboard',
    description: 'Analytics dashboard with AI-powered insights and data visualization for business intelligence.',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Tableau'],
    category: 'data visualization',
    github: 'https://github.com/siddhartha246/Stock-dashboard.git',
   
  },
  {
    id: 5,
    title: 'Social Media App',
    description: 'Social networking platform with real-time messaging, content sharing, and community features.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Flutter', 'GraphQL', 'PostgreSQL', 'WebRTC'],
    category: 'mobile',
    github: 'https://github.com',
  },
  {
    id: 6,
    title: 'Learning Management System',
    description: 'Comprehensive LMS with course creation, progress tracking, and interactive learning modules.',
    image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Angular', 'NestJS', 'MySQL', 'WebRTC'],
    category: 'fullstack',
    github: 'https://github.com',
    live: 'https://example.com',
  },
];

export async function GET() {
  return NextResponse.json(projects);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newProject = {
      id: projects.length + 1,
      ...body,
    };
    projects.push(newProject);
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}