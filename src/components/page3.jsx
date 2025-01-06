import React, { useEffect } from 'react';
import '../index.css'; // Import the CSS file where the font is defined

export default function Page1()  {
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
  }, []);

  return (
    <div className="font-abril-fatface overflow-hidden min-h-screen p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="text-red-950 relative flex flex-col w-full h-full text-4xl md:text-6xl lg:text-7xl gap-y-4 mt-28 ms-4 sm:ms-8 md:ms-28 lg:ms-36">
        <p className="">Access Our 
        </p>
        <p className="">Extensive Candidate </p>
        <p className="">Database</p>
        <div className="text-lg sm:text-md md:text-xl lg:text-2xl mt-10 ml-4 sm:ml-8 md:ml-96 lg:ml-128 px-4 sm:px-8 md:px-36 lg:px-48 mr-4 sm:mr-8 md:mr-6">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl">We understand that you look for more than just skills in a candidate. Our curated pool of 30000+ candidates are not only technically proficient but are also proactive, and are positively aligned with all your needs.</p>
        </div>
      </div>
    </div>
  )
}