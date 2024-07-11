import React from 'react';

const PortfolioAndWorkExperience = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Work Experience</h2>
      <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
        
        <div className="p-8 bg-white shadow-lg rounded-lg w-full md:w-1/2">
          <h3 className="text-xl font-bold">Internship [Frontend Developer]</h3>
          <p className="text-lg">Tensketch | Chennai, Tamilnadu, India</p>
          <p className="text-gray-600">Jan 2024 - May 2024</p>
          <p>In this company, I worked as an intern, and my role was a frontend developer.</p>
          <p>During my internship, we developed a project for a resort booking site.</p>
          <p>I focused on frontend development using HTML5, CSS3, Bootstrap 5, and Angular.</p>
        </div>
        <div className="p-8 bg-white shadow-lg rounded-lg w-full md:w-1/2">
          <h3 className="text-xl font-bold">Data Analyst</h3>
          <p className="text-lg">Objectways Technology | Karur, Tamilnadu, India</p>
          <p className="text-gray-600">Aug 2021 - Nov 2022</p>
          <p>We are a social impact sourcing company focused on data labeling services and machine learning with humble beginnings in rural south India.</p>
          <p>I worked as a Quality Checker and Auditor on various LIDAR projects. I have experience working with AWS tools and the VALEO Tool in LIDAR projects.</p>
          <p>My responsibilities included correcting errors and ensuring the quality of the data.</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioAndWorkExperience;
