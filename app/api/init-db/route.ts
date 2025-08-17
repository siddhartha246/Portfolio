import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const client = await pool.connect();
    
    try {
      // Check if tables exist
      const tablesResult = await client.query(`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name IN ('projects', 'resume')
      `);
      
      const projectsResult = await client.query('SELECT COUNT(*) FROM projects');
      const resumeResult = await client.query('SELECT COUNT(*) FROM resume');
      
      return NextResponse.json({
        status: 'Database is connected and initialized',
        tables: tablesResult.rows.map(row => row.table_name),
        projectCount: parseInt(projectsResult.rows[0].count),
        resumeCount: parseInt(resumeResult.rows[0].count),
        timestamp: new Date().toISOString()
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Database check error:', error);
    return NextResponse.json(
      { 
        error: 'Database connection failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}