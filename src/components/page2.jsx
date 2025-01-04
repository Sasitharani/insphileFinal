import React, { useEffect } from 'react';
import '../index.css'; // Import the CSS file where the font is defined

export default function Page2() {
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
  }, []);

  return (
    <>
      <div className="font-teko">
        <div className="text-black relative flex flex-col w-full h-full text-4xl md:text-6xl gap-y-4 mt-28 ms-28">
          <p className="">Struggling to find the right talent?</p>
          <p className="">Candidate</p>
          <div className="text-lg md:text-xl ml-10 md:ml-96 px-10 md:px-28 mr-5">
            <p className="">We Many companies face the challenge of finding the right candidate. Studies show that companies can spend up to 40% of their working hours on tasks that don't generate income, like manual recruitment processes (Source: McKinsey & Company).</p>
            <p className="">We at INSPHILE bring you best-in-class talent quicker and more efficiently. Our expert methodology offers a streamlined and holistic recruitment process that drastically reduces your time and cost per hire.</p>
          </div>
        </div>
      </div>
    </>
  );
}