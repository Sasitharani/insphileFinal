import React, { useEffect } from 'react';
import '../index.css'; // Import the CSS file

function Page4() {
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
  }, []);

  return (
    <div className="font-pt-sans">
      <div className="text-white relative flex flex-col w-full h-full text-4xl md:text-6xl gap-y-4 mt-28 ms-28">
        <p className="">Customised</p>
        <p className="">Candidate</p>
        <div className="">Matching</div>
        <div className="text-lg md:text-2xl mt-10 ml-10 md:ml-96 px-10 md:px-36">
          <p className="">We Internalise your values and Vision to</p>
          <p className="">meticulously screen and deliver</p>
          <div className="">candidates that are a perfect fit for </div>
          <div className="">your culture and goals. </div>
        </div>
      </div>
    </div>
  );
}

export default Page4;