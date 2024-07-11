// src/components/DownloadResume.jsx
import React from 'react';

const DownloadResume = () => {
  return (
    <section id="download-resume" className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Download My Resume</h2>
      <a 
        href="/resume.pdf" 
        download 
        className="inlineblock mt-6 bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 text-center rounded-lg hover:from-green-500 hover:to-blue-600"
      >
        Download Resume
      </a>
    </section>
  );
};

export default DownloadResume;
