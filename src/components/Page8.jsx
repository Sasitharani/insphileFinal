import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Page5() {
  const navigate = useNavigate();


  return (
    <>
<div
        id="home"
        className=" items-center justify-center min-h-screen border-4 border-orange-500"
      >
        <div className=" bg-black bg-opacity-35 border-4 border-blue-500">
          <h1 className="text-6xl text-pink-200 flex text-center justify-center">
            Our Collaboration Roadmap Page 5
          </h1>

          <div className="border-4 border-red-500 rounded-2xl p-4 bg-white bg-opacity-10 grid grid-cols-3 grid-rows-2 ml-24 mt-10">
            <div className="text-center justify-center mt-10 text-white text-4xl w-80 border border-gray-500 rounded-2xl bg-white h-96">
       
              <div className="flex text-center justify-center rounded-2xl mt-20">
              <img src="/img/phonei.png" alt="c" width="80" height="80" />
              </div>
             
              <div className="text-black text-2xl">
              Let us know your needs and we will curate a strategic approach to achieve your goals.
            </div>
            </div>


            <div className="text-center justify-center mt-20 text-white text-4xl w-80 border border-gray-500 rounded-2xl bg-white h-96">
             
              <div className="flex text-center justify-center rounded-2xl m-2 mt-20">
              <img src="/img/searchi.png" alt="c" width="80" height="80" />
              </div>
              <div className="text-black text-2xl">
              We begin our search to bring you the best candidates to meet your needs.
            </div>
            </div>


            <div className="text-center justify-center mt-0 text-white text-4xl w-80 border border-gray-500 rounded-2xl bg-white h-96">
            
              <div className="flex text-center justify-center rounded-2xl m-2 mt-20">
              <img src="/img/hsi.png" alt="c" width="80" height="80" />
              </div>
              <div className="text-black text-2xl">
              You choose your perfect candidate from our carefully tailored selection of prospects.
            </div>
            </div>
         
          
           
          </div>
        </div>
        <div
          className="absolute left-0 ml-28 p-4 bg-transparent"
          id="callButton"
        >
          <button className="px-4 py-2 bg-rose-100 text-black rounded-2xl">
            <a href="#contact">Book a call</a>
          </button>
        </div>
      </div>
    </>
  );
}