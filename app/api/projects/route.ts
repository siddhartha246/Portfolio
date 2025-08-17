import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import type { Project } from '@/lib/db';

export async function GET() {
  try {
    const client = await pool.connect();
    try {
      const result = await client.query(
        'SELECT * FROM projects ORDER BY created_at DESC'
      );
      return NextResponse.json(result.rows);
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { title, description, image, technologies, category, github, live } = await request.json();
    
    const client = await pool.connect();
    try {
      const result = await client.query(
        `INSERT INTO projects (title, description, image, technologies, category, github, live) 
         VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [title, description, image, technologies, category, github, live]
      );
      return NextResponse.json(result.rows[0], { status: 201 });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}