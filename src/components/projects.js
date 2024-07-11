import React from 'react';

const Projects = () => {
  const projectList = [
    { name: 'Link Clients & Contractors', github: 'https://github.com/Dhandayuthapani2112/Digital-platform-for-client-and-constructor.git' },
    { name: 'Recruitment Consulting Page', github: 'https://github.com/Dhandayuthapani2112/Recruitment-consulting.git' },
    { name: 'My Portfolio', github: 'https://github.com/Dhandayuthapani2112/My-portfolio' },
  ];

  return (
    <section id="projects" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <div key={index} className="project-card bg-white p-6 shadow-lg rounded-lg transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold my-2 text-center">{project.name}</h3>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="block mt-4 bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 text-center rounded-lg hover:from-green-500 hover:to-blue-600">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
