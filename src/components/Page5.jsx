import React from 'react';

export default function Page5() {
  return (
    <>
      <div
        
        className=" items-center justify-center min-h-screen font-poppins"
      >
        <div className=" bg-black bg-opacity-35 ">
          <h1 className="text-6xl text-pink-200 flex text-center justify-center font-bold">
            Our Collaboration Roadmap 
          </h1>

          <div className=" rounded-2xl p-4 grid grid-cols-3 grid-rows-3 ml-24 -mt-14 h-screen">
            <div className="text-center justify-center mt-20 text-white text-4xl w-80 border border-gray-500 rounded-2xl bg-white h-96">
              <div className="text-black mt-5 font-extrabold">Step 1</div>
              <div className="flex text-center justify-center rounded-2xl mt-10">
                <img src="/img/phonei.png" alt="c" width="80" height="80" />
              </div>

              <div className="text-black text-2xl mt-10">
                Let us know your needs and we will curate a strategic approach
                to achieve your goals.
              </div>
            </div>

            <div className="text-center justify-center mt-20 text-white text-4xl w-80 border border-gray-500 rounded-2xl bg-white h-96">
            <div className="text-black mt-5 font-extrabold">Step 2</div>
              <div className="flex text-center justify-center rounded-2xl m-2 mt-10">
                <img src="/img/searchi.png" alt="c" width="80" height="80" />
              </div>
              <div className="text-black text-2xl mt-10">
                We begin our search to bring you the best candidates to meet
                your needs.
              </div>
            </div>

            <div className="text-center justify-center mt-20 text-white text-4xl w-80 border border-gray-500 rounded-2xl bg-white h-96">
            <div className="text-black mt-5 font-extrabold">Step 3</div>
              <div className="flex text-center justify-center rounded-2xl m-2 mt-10">
                <img src="/img/hsi.png" alt="c" width="80" height="80" />
              </div>
              <div className="text-black text-2xl mt-10">
                You choose your perfect candidate from our carefully tailored
                selection of prospects.
              </div>
            </div>
          </div>
          
        </div>
   
      </div>
    </>
  );
}