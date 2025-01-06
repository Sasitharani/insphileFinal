import React, { useEffect } from 'react';

export default function Page2a() {
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
  }, []);

  return (
    <>
      <div className="items-center justify-center min-h-screen font-poppins">
        <div className="bg-black bg-opacity-35">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-pink-200 flex text-center justify-center font-bold">
            We provide the following services
          </h1>

          <div className="relative flex items-center justify-center w-full h-full transform scale-75 md:scale-90 lg:scale-100 font-poppins border-2 border-gray-300 rounded-2xl">
            <div className="grid grid-cols-2 grid-rows-3 gap-4 p-4">
              <div className="border-2 p-2 md:p-4 lg:p-6 text-white text-lg md:text-xl lg:text-2xl bg-lightBrown rounded-full text-center justify-center items-center border-lightBrown">Non IT Recruitment</div>
              <div className="border-2 p-2 md:p-4 lg:p-6 text-white text-lg md:text-xl lg:text-2xl bg-lightBrown rounded-full text-center justify-center items-center border-lightBrown">IT Recruitment</div>
              <div className="border-2 p-2 md:p-4 lg:p-6 text-white text-lg md:text-xl lg:text-2xl bg-lightBrown rounded-full text-center justify-center items-center border-lightBrown">ITES Recruitment</div>
              <div className="border-2 p-2 md:p-4 lg:p-6 text-white text-lg md:text-xl lg:text-2xl bg-lightBrown rounded-full text-center justify-center items-center border-lightBrown">Head Hunting</div>
              <div className="border-2 p-2 md:p-4 lg:p-6 text-white text-lg md:text-xl lg:text-2xl bg-lightBrown rounded-full text-center justify-center items-center border-lightBrown">Executive Search</div>
              <div className="border-2 p-2 md:p-4 lg:p-6 text-white text-lg md:text-xl lg:text-2xl bg-lightBrown rounded-full text-center justify-center items-center border-lightBrown">Resume Builder</div>
              <div className="border-2 p-2 md:p-4 lg:p-6 text-white text-lg md:text-xl lg:text-2xl bg-lightBrown rounded-full text-center justify-center items-center border-lightBrown">Career Consulting</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}