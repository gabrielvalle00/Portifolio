"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant, cardVariant, fadeIn } from "@/utils/motion";
import { Projects_data } from "@/constants";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  const [offset, setOffset] = useState(0);
  const speed = 1.2; // pixels por frame
  const containerRef = useRef<HTMLDivElement>(null);
  const cardWidth = 420;
  const gap = typeof window !== 'undefined' && window.innerWidth < 640 ? 12 : 32;
  const total = Projects_data.length;
  const [isHovered, setIsHovered] = useState(false);

  // Responsividade: larguras para cada breakpoint
  const getCardWidth = () => {
    if (typeof window !== 'undefined') {
      const w = window.innerWidth;
      if (w < 640) return 0.9 * w; // mobile
      if (w < 768) return 340;
      if (w < 1024) return 380;
    }
    return 420; // desktop
  };
  const [responsiveCardWidth, setResponsiveCardWidth] = useState(getCardWidth());
  useEffect(() => {
    function handleResize() {
      setResponsiveCardWidth(getCardWidth());
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    let animationId: number;
    function animate() {
      setOffset((prev) => {
        const totalWidth = total * (cardWidth + gap);
        let next = prev + speed;
        if (next >= totalWidth) next = 0;
        return next;
      });
      animationId = requestAnimationFrame(animate);
    }
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [total, isHovered]);

  // Duplicar os cards para efeito de loop infinito
  const cardsToShow = [...Projects_data, ...Projects_data];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col items-center justify-center py-20 w-full"
      id="projects"
    >
      <motion.div variants={textVariant} className="text-center mb-8 sm:mb-12 md:mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 mb-2 sm:mb-4 md:mb-8">
          Meus Projetos
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Confira alguns dos projetos que desenvolvi, demonstrando minhas habilidades em diferentes tecnologias e abordagens de desenvolvimento
        </p>
      </motion.div>

      {/* Filtros por categoria */}
      <motion.div 
        variants={fadeIn(0.5)}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {["Todos", "Full Stack", "Frontend", "Backend", "Web App", "Desktop"].map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-primary-500/20 to-cyan-500/20 border border-primary-500/30 text-white font-medium hover:from-primary-500/40 hover:to-cyan-500/40 transition-all duration-300"
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Carrossel horizontal clássico */}
      <div className="relative w-full max-w-7xl h-[320px] sm:h-[400px] md:h-[480px] lg:h-[540px] overflow-hidden select-none px-1 sm:px-4 mb-8">
        <div
          ref={containerRef}
          className="flex items-center h-full gap-3 sm:gap-8"
          style={{
            transform: `translateX(-${offset}px)`,
            transition: 'none',
            width: `${cardsToShow.length * (responsiveCardWidth + gap)}px`,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {cardsToShow.map((project, i) => (
            <div
              key={i + project.title}
              style={{ width: responsiveCardWidth, minWidth: responsiveCardWidth, maxWidth: responsiveCardWidth }}
              className="flex-shrink-0"
            >
              <ProjectCard
                src={project.image}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubUrl={project.githubUrl ?? undefined}
                liveUrl={project.liveUrl ?? undefined}
                category={project.category}
                index={i}
                {...('videoUrl' in project ? { videoUrl: (project as any).videoUrl } : {})}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        variants={fadeIn(1.0)}
        className="text-center mt-16"
      >
        <p className="text-lg text-gray-300 mb-6">
          Quer ver mais projetos? Visite meu GitHub!
        </p>
        <motion.a
          href="https://github.com/gabrielvalle00"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-full hover:from-purple-400 hover:to-cyan-400 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/>
          </svg>
          Ver no GitHub
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
