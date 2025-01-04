import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Page6() {
  const navigate = useNavigate();

  return (
    <div className="">
      <h1 className="text-6xl text-yellow-200 text-center justify-center font-bold">
        Our Sectorial Presence
      </h1>
      <div
        id=""
        className="relative flex grid-cols-4 grid-rows-2 gap-y-20 items-center justify-center min-h-screen "
      >
        <div className="rounded-2xl p-4 grid grid-cols-5 grid-rows-2 gap-4 mt-10 h-screen w-screen">
          
        <div className="border-2 p-4 text-white text-xl bg-lightBrown flex items-center justify-center  text-center border-lightBrown rounded-full">IT /ITES/ Software/ Hardware</div>
        <div className="border-2 p-4 text-white text-xl bg-lightBrown flex items-center justify-center  text-center border-lightBrown rounded-full">Banking and retail</div>
      <div className="border-2 p-4 text-white text-xl bg-lightBrown flex items-center justify-center  text-center border-lightBrown rounded-full">Oil and gas</div>
      <div className="border-2 p-4 text-white text-xl bg-lightBrown flex items-center justify-center  text-center border-lightBrown rounded-full">Power / Renewable energy</div>
      <div className="border-2 p-4 text-white text-xl bg-lightBrown flex items-center justify-center  text-center border-lightBrown rounded-full">Food / FMCG/ Agriculture</div>
      <div className="border-2 p-4 text-white text-xl bg-lightBrown flex items-center justify-center  text-center border-lightBrown rounded-full">Automobile</div>
      <div className="border-2 p-4 text-white text-xl bg-lightBrown flex items-center justify-center  text-center border-lightBrown rounded-full">Marketing</div>
      <div className="border-2 p-4 text-white text-xl bg-lightBrown flex items-center justify-center  text-center border-lightBrown rounded-full">HVAC/ Refrigeration/ Cold chains</div>
      <div className="border-2 p-4 text-white text-xl bg-lightBrown flex items-center justify-center  text-center border-lightBrown rounded-full">Construction/ Infrastructure/ Interior Designing</div>
      <div className="border-2 p-4 text-white text-xl bg-lightBrown flex items-center justify-center  text-center border-lightBrown rounded-full">Industrial engineering/ Manufacturing</div>
    </div>


        </div>
      </div>

  );
}
