import React from "react";
import AboutMe from "../sub/AboutMe";

const About = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about">
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
      </div>
      
      {/* Content Layer */}
      <div className="relative z-[2]">
        <AboutMe />
      </div>
    </div>
  );
};

export default About; 