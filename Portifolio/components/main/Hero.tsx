import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full pt-[-10px]" id="about-me">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="rotate-180 absolute top-[-340px] h-full w-full left-0 object-cover"
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
        {/* Overlay escuro com blur leve para leitura em telas menores */}
        <div className="block xl:hidden absolute inset-0 bg-black/30 backdrop-blur-sm z-10" />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-[2]">
        <HeroContent />
        
      </div>
    </div>
  );
};

export default Hero;
