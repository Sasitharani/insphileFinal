import React from 'react';

export default function Page5() {
  return (
    <>
      <div
        className="flex items-center justify-center min-h-screen font-poppins p-4 sm:p-6 md:p-8 lg:p-12"
      >
        <div className="bg-black bg-opacity-35 p-4 md:p-8 lg:p-12 w-full mt-4 md:mt-8 lg:mt-14">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-pink-200 flex text-center justify-center font-bold">
            Our Collaboration Roadmap 
          </h1>

          <div className="rounded-2xl p-4 grid grid-cols-1 gap-4 ml-4 mt-4 h-auto
          md:grid-cols-3 md:ml-12
          lg:grid-cols-3 lg:ml-24 lg:mt-14">
            <div className="text-center justify-center mt-10 md:mt-20 text-white text-2xl md:text-3xl lg:text-4xl w-full md:w-80 border border-gray-500 rounded-2xl bg-white h-auto p-4">
              <div className="text-black mt-5 font-extrabold">Step 1</div>
              <div className="flex text-center justify-center rounded-2xl mt-5 md:mt-10">
                <img src="/img/phonei.png" alt="c" width="80" height="80" />
              </div>

              <div className="text-black text-lg md:text-xl lg:text-2xl mt-5 md:mt-10">
                Let us know your needs and we will curate a strategic approach
                to achieve your goals.
              </div>
            </div>

            <div className="text-center justify-center mt-10 md:mt-20 text-white text-2xl md:text-3xl lg:text-4xl w-full md:w-80 border border-gray-500 rounded-2xl bg-white h-auto p-4">
              <div className="text-black mt-5 font-extrabold">Step 2</div>
              <div className="flex text-center justify-center rounded-2xl mt-5 md:mt-10">
                <img src="/img/searchi.png" alt="c" width="80" height="80" />
              </div>
              <div className="text-black text-lg md:text-xl lg:text-2xl mt-5 md:mt-10">
                We begin our search to bring you the best candidates to meet
                your needs.
              </div>
            </div>

            <div className="text-center justify-center mt-10 md:mt-20 text-white text-2xl md:text-3xl lg:text-4xl w-full md:w-80 border border-gray-500 rounded-2xl bg-white h-auto p-4">
              <div className="text-black mt-5 font-extrabold">Step 3</div>
              <div className="flex text-center justify-center rounded-2xl mt-5 md:mt-10">
                <img src="/img/hsi.png" alt="c" width="80" height="80" />
              </div>
              <div className="text-black text-lg md:text-xl lg:text-2xl mt-5 md:mt-10">
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