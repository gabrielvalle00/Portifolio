"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant, cardVariant, fadeIn } from "@/utils/motion";
import { Projects_data } from "@/constants";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col items-center justify-center py-20 w-full"
      id="projects"
    >
      <motion.div variants={textVariant} className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 mb-4">
          Meus Projetos
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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

      {/* Grid de Projetos */}
      <motion.div 
        variants={cardVariant}
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-7xl px-4"
      >
        {Projects_data.map((project, index) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            category={project.category}
            index={index}
            videoUrl={project.videoUrl}
          />
        ))}
      </motion.div>

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
