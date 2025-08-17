'use client';

import { useState } from 'react';
import { Upload, Plus, Database } from 'lucide-react';

const AdminPanel = () => {
  const [isInitializing, setIsInitializing] = useState(false);
  const [initStatus, setInitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');

  const initializeDatabase = async () => {
    setIsInitializing(true);
    setInitStatus('idle');

    try {
      const response = await fetch('/api/init-db', {
        method: 'POST',
      });

      if (response.ok) {
        setInitStatus('success');
      } else {
        setInitStatus('error');
      }
    } catch (error) {
      setInitStatus('error');
    } finally {
      setIsInitializing(false);
    }
  };

  const handleResumeUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeFile) return;

    setUploadStatus('uploading');

    try {
      const formData = new FormData();
      formData.append('file', resumeFile);

      const response = await fetch('/api/resume', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setUploadStatus('success');
        setResumeFile(null);
      } else {
        setUploadStatus('error');
      }
    } catch (error) {
      setUploadStatus('error');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="glass-card p-6 w-80">
        <h3 className="text-white font-bold mb-4 flex items-center">
          <Database className="mr-2" size={20} />
          Admin Panel
        </h3>

        {/* Database Initialization */}
        <div className="mb-6">
          <button
            onClick={initializeDatabase}
            disabled={isInitializing}
            className="w-full bg-accent hover:bg-accent/80 text-white py-2 px-4 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center"
          >
            {isInitializing ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            ) : (
              <>
                <Plus className="mr-2" size={16} />
                Initialize Database
              </>
            )}
          </button>

          {initStatus === 'success' && (
            <p className="text-green-400 text-sm mt-2">Database initialized successfully!</p>
          )}
          {initStatus === 'error' && (
            <p className="text-red-400 text-sm mt-2">Failed to initialize database.</p>
          )}
        </div>

        {/* Resume Upload */}
        <form onSubmit={handleResumeUpload} className="space-y-4">
          <div>
            <label className="block text-white text-sm mb-2">Upload Resume (PDF)</label>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
              className="w-full text-white text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-accent file:text-white hover:file:bg-accent/80"
            />
          </div>

          <button
            type="submit"
            disabled={!resumeFile || uploadStatus === 'uploading'}
            className="w-full bg-secondary hover:bg-secondary/80 text-white py-2 px-4 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center"
          >
            {uploadStatus === 'uploading' ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            ) : (
              <>
                <Upload className="mr-2" size={16} />
                Upload Resume
              </>
            )}
          </button>

          {uploadStatus === 'success' && (
            <p className="text-green-400 text-sm">Resume uploaded successfully!</p>
          )}
          {uploadStatus === 'error' && (
            <p className="text-red-400 text-sm">Failed to upload resume.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;