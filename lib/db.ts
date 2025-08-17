import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Test connection and create tables on startup
async function initializeDatabase() {
  try {
    const client = await pool.connect();
    
    try {
      // Test connection
      await client.query('SELECT NOW()');
      console.log('✅ Connected to Neon DB successfully');
      
      // Create projects table
      await client.query(`
        CREATE TABLE IF NOT EXISTS projects (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          description TEXT NOT NULL,
          image VARCHAR(500) NOT NULL,
          technologies TEXT[] NOT NULL,
          category VARCHAR(100) NOT NULL,
          github VARCHAR(500),
          live VARCHAR(500),
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);
      console.log('✅ Projects table created/verified');

      // Create resume table
      await client.query(`
        CREATE TABLE IF NOT EXISTS resume (
          id SERIAL PRIMARY KEY,
          filename VARCHAR(255) NOT NULL,
          file_data BYTEA NOT NULL,
          content_type VARCHAR(100) NOT NULL,
          uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);
      console.log('✅ Resume table created/verified');

      // Insert sample projects if table is empty
      const projectCount = await client.query('SELECT COUNT(*) FROM projects');
      if (parseInt(projectCount.rows[0].count) === 0) {
        await client.query(`
          INSERT INTO projects (title, description, image, technologies, category, github) VALUES
          ($1, $2, $3, $4, $5, $6),
          ($7, $8, $9, $10, $11, $12),
          ($13, $14, $15, $16, $17, $18)
        `, [
          'Settle-up',
          'Expense tracking app that record, split, and settle shared expenses with automated debt calculations and minimized transactions.',
          'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
          ['React', 'Node.js', 'MongoDB'],
          'fullstack',
          'https://github.com/siddhartha246/SettleUp.git',
          
          'Employee Attrition Prediction',
          'Built a churn prediction model to identify employees likely to leave a bank using historical data. Applied machine learning techniques with TensorFlow for effective classification and retention insights.',
          'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
          ['Python', 'Tensorflow', 'Scikit-learn'],
          'AI/ML',
          'https://github.com/siddhartha246/Employee-Attrition-Prediction.git',
          
          'Stock Dashboard',
          'Analytics dashboard for stock performance.',
          'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
          ['Tableau'],
          'Data-visualization',
          'https://github.com/siddhartha246/Stock-dashboard.git'
        ]);
        console.log('✅ Sample projects inserted');
      }

    } finally {
      client.release();
    }
  } catch (error) {
    console.error('❌ Database initialization error:', error);
  }
}

// Initialize database on module load
initializeDatabase();

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