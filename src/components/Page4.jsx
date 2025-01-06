import React, { useEffect } from 'react';
import '../index.css'; // Import the CSS file

function Page4() {

  return (
    <div className="font-pt-sans">
      <div className="text-white min-h-screen relative flex flex-col w-full h-full text-4xl md:text-6xl lg:text-7xl gap-y-4 mt-28 ms-4 md:ms-28 lg:ms-36">
        <p className="">Customised</p>
        <p className="">Candidate</p>
        <div className="">Matching</div>
        <div className="text-lg md:text-2xl lg:text-3xl mt-10 ml-4 md:ml-96 lg:ml-128 px-4 md:px-36 lg:px-48">
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