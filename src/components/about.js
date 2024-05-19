// src/components/About.jsx
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  const [position, setPosition] = useState('Web Developer');
  const positions = ['Web Developer', 'Frontend Developer', 'LiDar Technology', 'UI/UX Designer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        const currentIndex = positions.indexOf(prevPosition);
        const nextIndex = (currentIndex + 1) % positions.length;
        return positions[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [positions]);

  return (
    <section id="about" className="p-8 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-4 md:mb-0 md:mr-8">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          Hi, I'm Dhandayuthapani Murugesan, a passionate <span className="font-bold">{position}</span> with expertise in Frontend Developing using HTML, CSS, BootStrap, JS, React JS. I enjoy building user-friendly and visually appealing web applications.
        </p>
        <div className="flex mt-4 space-x-4">
          <a href="https://www.instagram.com/mrr._.official/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="text-gray-700 hover:text-gray-900" />
          </a>
          <a href="https://www.linkedin.com/in/dhandayuthapani-murugesan-29726025b/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-gray-700 hover:text-gray-900" />
          </a>
          <a href="https://github.com/Dhandayuthapani2112" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" className="text-gray-700 hover:text-gray-900" />
          </a>
          <a href="https://wa.me/9952386487" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-gray-700 hover:text-gray-900" />
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
        <div className="relative group rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 shadow-lg transition-transform transform group-hover:scale-105">
          <img 
            src="/myself.jpg" 
            alt="Your Name" 
            className="object-cover object-center w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
