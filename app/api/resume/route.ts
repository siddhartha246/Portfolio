import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const client = await pool.connect();
    try {
      const result = await client.query(
        'SELECT filename, file_data, content_type FROM resume ORDER BY uploaded_at DESC LIMIT 1'
      );
      
      if (result.rows.length === 0) {
        return NextResponse.json(
          { error: 'No resume found' },
          { status: 404 }
        );
      }

      const resume = result.rows[0];
      
      return new NextResponse(resume.file_data, {
        headers: {
          'Content-Type': resume.content_type,
          'Content-Disposition': `inline; filename="${resume.filename}"`,
        },
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error fetching resume:', error);
    return NextResponse.json(
      { error: 'Failed to fetch resume' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    if (file.type !== 'application/pdf') {
      return NextResponse.json(
        { error: 'Only PDF files are allowed' },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    
    const client = await pool.connect();
    try {
      // Delete existing resume
      await client.query('DELETE FROM resume');
      
      // Insert new resume
      const result = await client.query(
        `INSERT INTO resume (filename, file_data, content_type) 
         VALUES ($1, $2, $3) RETURNING id, filename, uploaded_at`,
        [file.name, buffer, file.type]
      );
      
      return NextResponse.json({
        message: 'Resume uploaded successfully',
        resume: result.rows[0]
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error uploading resume:', error);
    return NextResponse.json(
      { error: 'Failed to upload resume' },
      { status: 500 }
    );
  }
}