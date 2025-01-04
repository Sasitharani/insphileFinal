
import Contact from './Contact';
import { useState, useEffect } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page2a from './Page2a';
import Page4 from './Page4';
import Page3 from './Page3';
import Page8 from './Page8';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';

export default function Front() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleSmoothScroll = (event) => {
      if (event.target.tagName === 'A' && event.target.hash) {
        event.preventDefault();
        const targetId = event.target.hash.slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  const handleScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='overflow-x-hidden'>
        <div className="fixed bg-neutral-600 z-10 rounded-2xl opacity-50 left-0 mt-60 ml-2 flex flex-col  h-50 w-85 p-4 text-white">
          <p className="text-[8px] ">INSPHILE</p>
          <p className="text-[8px] ">MANAGEMENT</p>
          <p className="text-[8px] ">SOLUTIONS</p>
        </div>
      <div className="fixed top-14 right-4 p-4 bg-transparent z-10 " id="callButton">
        <a href="#contact" onClick={handleScroll}>
          <button className="px-2 py-1 md:px-4 md:py-2 bg-rose-100 text-black rounded-2xl">
            Book a Call
          </button>
        </a>
      </div>
 
      <div id="home1" className="flex flex-col h-screen mt-16  bg-center bg-cover" style={{ backgroundImage: "url('/img/groupHifi.jpg')" }}>
        <Page1 />
      </div>

      <div id="wwd" className="flex flex-col h-screen bg-center bg-cover" style={{ backgroundImage: "url('/img/groupHands.jpg')" }}>x
        <Page2a />
      </div>

      <div id="service" className="flex flex-col min-h-screen h-screen bg-center opacity-90 bg-cover" style={{ backgroundImage: "url('/img/b2.jpg')" }}>   
        <Page2 />
      </div>

      <div id="wwd" className="flex flex-col min-h-screen h-screen bg-center bg-cover" style={{ backgroundImage: "url('/img/b3.jpg')" }}>  
        <Page3 /> 
      </div>

      <div id="4" className="relative flex flex-col min-h-screen h-screen bg-cover bg-center" style={{ backgroundImage: "url('/img/threeFemale .jpg')" }}>   
        <div className="absolute inset-0 bg-neutral-600 opacity-50"></div>
        <Page4 />
      </div>

      <div id="5" className="flex flex-col min-h-screen h-screen bg-cover bg-center opacity-90" style={{ backgroundImage: "url('/img/b5.jpg')" }}>   
        <Page5 />
      </div>

      <div id="sectors" className="" style={{ backgroundImage: "url('/img/tab.jpg')" }}>  
        <Page6 /> 
      </div>

      <div id="" className="flex flex-col min-h-screen h-screen  bg-cover  bg-center" style={{ backgroundImage: "url('/img/b6.jpg')" }}>   
        <Page7 />
      </div>

      <div id="contact" className="flex flex-col h-screen bg-contain bg-center opacity-90 border-4 border-red-700" style={{ backgroundImage: "url('/img/hands.jpg')" }}>  
        <Contact /> 
      </div>
    </div>
  );
}