import React, { useEffect } from 'react';
import '../index.css'; // Import the CSS file where the font is defined

export default function Page1()  {
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
  }, []);

  return (
    <div className="font-abril-fatface">
      <div className="text-red-950 relative flex flex-col w-full h-full text-4xl md:text-6xl gap-y-4 mt-28 ms-28">
        <p className="">Access Our 
        </p>
        <p className="">Extensive Candidate </p>
        <p className="">Database</p>
        <div className="text-lg md:text-xl mt-10 ml-10 md:ml-96 px-10 md:px-36 mr-6">
          <p className="">We understand that you look for more than just skills in a candidate. Our curated pool of 30000+ candidates are not only technically proficient but are also proactive, and are positively aligned with all your needs.</p>
        </div>
      </div>
    </div>
  )
}