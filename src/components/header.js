import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white">
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dhandayuthapani Murugesan</h1>
        <button
          className="text-white md:hidden"
          onClick={toggleMenu}
        >
          &#9776; {/* Hamburger icon */}
        </button>
        <nav className="hidden md:flex space-x-4">
          <a href="#header" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
      <div className={`md:hidden bg-black text-white overflow-hidden transition-max-height duration-300 ease-in-out ${isMenuOpen ? 'max-h-40' : 'max-h-0'}`}>
        <nav className="flex flex-col items-center p-4 space-y-4">
          <a href="#Home" className="hover:underline">Home</a>
          <a href="#About" className="hover:underline">About</a>
          <a href="#Projects" className="hover:underline">Projects</a>
          <a href="#Contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
