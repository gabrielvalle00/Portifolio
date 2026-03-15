import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const videoRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      {/* Video Background with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          willChange: 'transform'
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{
            filter: 'invert(1) brightness(1.2) contrast(1.3) opacity(0.7)',
            mixBlendMode: 'multiply'
          }}
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
        </video>
        {/* Gradient Overlay - mais suave para mostrar mais o vídeo */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center"
        >
          {/* Main Name */}
          <h1 
            className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-black mb-4"
            style={{
              textShadow: '0 2px 20px rgba(255,255,255,0.5), 0 0 40px rgba(124,58,237,0.2)'
            }}
          >
            {personalInfo.name}
          </h1>
          
          {/* Subtitle with purple accent */}
          <div className="relative inline-block">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 bg-white/60 backdrop-blur-sm px-6 py-2 rounded-2xl"
              style={{
                textShadow: '0 2px 10px rgba(255,255,255,0.8)'
              }}
            >
              {personalInfo.title}
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="h-1 bg-gradient-to-r from-lime-500 via-lime-400 to-lime-500 mt-3 rounded-full"
            ></motion.div>
          </div>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-6 text-lg text-gray-600 bg-white/40 backdrop-blur-sm px-4 py-2 rounded-lg inline-block"
          >
            {personalInfo.location}
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-sm text-gray-600 mb-2 tracking-wider uppercase bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full">Scroll</span>
          <ChevronDown className="w-6 h-6 text-lime-500 animate-bounce" />
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-lime-200/30 blur-3xl"
      ></motion.div>
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-lime-300/20 blur-3xl"
      ></motion.div>
    </section>
  );
};

export default Hero;
