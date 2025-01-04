import React, { useEffect } from 'react';

export default function Page1() {
  const handleScroll = (e) => {
    e.preventDefault();
    document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
  }, []);

  return (
    <>
      <div id="home" className="relative flex items-center justify-center w-full h-full transform scale-75 font-poppins">
     
        <div className="absolute left-0 ml-4 flex flex-col items-start justify-center h-50 w-85 p-4 bg-white bg-opacity-35 border-2 border-gray-300 rounded-2xl" id="bridging">
          <h1 className="text-8xl md:text-8xl font-semibold text-lightBrown">Bridging Top</h1>
          <h1 className="text-8xl md:text-8xl font-semibold text-lightBrown"> Talent  <span className="text-6xl md:text-6xl font-semibold text-lightBrown"> With</span></h1>
          <h1 className="text-6xl md:text-6xl font-semibold text-lightBrown">Top Companies</h1>
          <p className="text-3xl md:text-3xl text-black mt-14">
            With our quick and easy recruitment services you are
          </p>
          <p className="text-3xl md:text-3xl text-black">
            just one call away from building your dream team!
          </p>
        </div>
    
      </div>
    </>
  );
}