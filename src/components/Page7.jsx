import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Page7() {
  const navigate = useNavigate();

  return (
    <>
      <div id="home" className=" relative flex items-center justify-center min-h-screen">
        <div className="absolute left-0 flex flex-col items-start justify-center h-50 p-10 bg-black bg-opacity-35">
          <h1 className="text-4xl text-green-500">Looking for a Dream Job?</h1>
    
          <p className="text-xl text-white mt-5 w-96">
          Join INSPHILE’s candidate database to get access to top-tier jobs at leading companies. Simply fill out our application form, share your resume and we will connect you with the right oppurtunities.
          </p>
        </div>

      </div>
    </>
  );
}