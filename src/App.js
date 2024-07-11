import './App.css';
import React from 'react';
import Header from './components/header';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import DownloadResume from './components/DownloadResume';
import PortfolioAndWorkExperience from './components/PortfolioAndWorkExperience';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <DownloadResume />
        <Projects />
        <PortfolioAndWorkExperience/>
        <Contact />
      </main>
    </div>
  );
}

export default App;