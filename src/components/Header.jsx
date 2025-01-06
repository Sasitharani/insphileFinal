import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowX = 'hidden';
    } else {
      document.body.style.overflowX = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <header className="w-full text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-10 bg-black overflow-x-hidden ">
      <h1 className="text-xl font-bold">Insphile Management Solutions</h1>
      <nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <ul className={`md:flex space-x-12 ${isMenuOpen ? 'fixed inset-0 bg-black flex flex-col items-start justify-center space-y-4 p-4' : 'hidden'}`}>
          <li className="hover:text-yellow-500 font-medium text-sm"><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li className="hover:text-yellow-500 font-medium text-sm"><a href="#service" onClick={() => setIsMenuOpen(false)}>Our Services</a></li>
          <li className="hover:text-yellow-500 font-medium text-sm"><a href="#wwd" onClick={() => setIsMenuOpen(false)}>What do we do</a></li>
          <li className="hover:text-yellow-500 font-medium text-sm"><a href="#sectors" onClick={() => setIsMenuOpen(false)}>Sectors</a></li>
          <li className="hover:text-yellow-500 font-medium text-sm"><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}