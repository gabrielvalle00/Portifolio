"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant, cardVariant } from "@/utils/motion";
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
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Confira alguns dos projetos que desenvolvi, demonstrando minhas habilidades e experiência
        </p>
      </motion.div>

      <motion.div 
        variants={cardVariant}
        className="h-full w-full flex flex-col lg:flex-row gap-10 px-4 max-w-7xl"
      >
        <ProjectCard
          src="/project2.png"
          title="Patinhas Do Bem"
          description="A plataforma foi projetada para facilitar a adoção e doação de animais, promovendo conexões entre pessoas interessadas em oferecer um novo lar para os pets e aquelas que precisam encontrar famílias acolhedoras para seus animais. Através de um desenvolvimento completo e complexo, conseguimos entregar um produto funcional, que reflete os conhecimentos adquiridos ao longo do curso e a dedicação em transformar uma ideia em uma solução tecnológica."
        />
        <ProjectCard
          src="/NextWebsite.png"
          title="Mundo Literario"
          description="Uma loja virtual para seus clientes. Este projeto foi desenvolvido como parte de uma atividade de grupo para criar uma aplicação de loja virtual em Node.js. Utilizamos tecnologias como Express, Express Handlebars, Body Parser, CSS, JavaScript, entre outras para criar uma plataforma interativa e funcional."
        />
      </motion.div>
    </motion.div>
  );
};

export default Projects;
