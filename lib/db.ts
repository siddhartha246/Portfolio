import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  github?: string;
  live?: string;
  created_at?: Date;
}

export interface Resume {
  id: number;
  filename: string;
  file_data: Buffer;
  content_type: string;
  uploaded_at: Date;
}