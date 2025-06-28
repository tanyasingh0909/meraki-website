import React, { useEffect, useState } from "react";
import Image from "next/image";


const HomeSection = () => {
  const [animateLogo, setAnimateLogo] = useState(false);

  useEffect(() => {
    setAnimateLogo(true); // Animate on render
  }, []);

  return (
<section id="home" className="min-h-screen w-full bg-black flex items-center justify-center px-6 py-12">
  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
    {/* Text Content */}
    <div className="text-center lg:text-left">
      <div className="mb-8 space-y-2">
        {/* Welcome line - simple and clean */}
        <p className="text-xl sm:text-2xl text-orange-300 font-light tracking-wider">
          WELCOME TO
        </p>

 
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold leading-[0.9]">
          <span className="italic text-orange-500 bg-clip-text ">
            Meraki
          </span>
        </h1>

        <p className="text-2xl sm:text-3xl text-orange-100/80 mt-4">
          Culinary Arts Society
        </p>
      </div>

      <p className="text-lg sm:text-xl text-orange-100/90 max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed">
        Where passion meets flavor - crafting unforgettable dining experiences
      </p>
      
      
      <div className="flex justify-center lg:justify-start">
        <a
          href="#about"
          className="px-10 py-4 bg-transparent border-2 border-orange-400 text-orange-300 rounded-full hover:bg-orange-900/30 transition-all duration-300 text-lg font-medium"
        >
          Discover Our Story →
        </a>
      </div>
    </div>

    {/* Logo - Desktop only */}
    <div className="hidden lg:block w-[380px] h-[380px] rounded-full overflow-hidden shadow-2xl">
      <Image
        src="/images/meraki_logo.png"
        alt="Meraki Logo"
        width={500}
        height={500}
        className="object-cover w-full h-full"
       
      />
    </div>
  </div>
</section>
  );
};

export default HomeSection;
