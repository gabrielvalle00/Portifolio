"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaCloud, FaProjectDiagram, FaPython, FaRobot, FaUsers, FaCogs } from "react-icons/fa";
import AboutMe from "../sub/AboutMe";

const entregas = [
  {
    icon: FaCode,
    title: "Desenvolvimento de Software",
    desc: "Criação de aplicações web, desktop e mobile. Programação orientada a objetos, front-end (React, Next.js), back-end (Node.js, APIs REST) e testes automatizados."
  },
  {
    icon: FaDatabase,
    title: "Banco de Dados",
    desc: "Modelagem, criação e manutenção de bancos de dados relacionais e NoSQL. Consultas SQL avançadas, procedures e otimização de performance."
  },
  {
    icon: FaCloud,
    title: "Infraestrutura e Cloud",
    desc: "Deploy de aplicações em servidores e nuvem (AWS, Google Cloud). Docker, CI/CD e versionamento com Git."
  },
  {
    icon: FaProjectDiagram,
    title: "Análise de Sistemas",
    desc: "Levantamento de requisitos, modelagem UML, documentação técnica e funcional."
  },
  {
    icon: FaPython,
    title: "Python e Automação",
    desc: "Desenvolvimento de scripts, automações, análise de dados com Pandas/Numpy e aplicações Python em projetos reais."
  },
  {
    icon: FaRobot,
    title: "Inteligência Artificial",
    desc: "Machine Learning, criação de modelos preditivos, classificação de dados e IA aplicada com Scikit-learn, TensorFlow ou PyTorch."
  },
  {
    icon: FaCogs,
    title: "Metodologias Ágeis",
    desc: "Scrum, Kanban, trabalho em equipe, comunicação com stakeholders e entrega contínua de valor."
  },
  {
    icon: FaUsers,
    title: "Soft Skills",
    desc: "Resolução de problemas, pensamento lógico, proatividade e aprendizado contínuo."
  }
];

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
        <section id="about" className="py-10 sm:py-16 md:py-20 bg-gradient-to-b from-black via-gray-900 to-background">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
                O que um Técnico em ADS entrega
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Veja as principais competências e entregas de um profissional de Análise e Desenvolvimento de Sistemas, incluindo Python e Inteligência Artificial.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {entregas.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="group bg-gray-800 rounded-2xl p-6 h-full border border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/10 relative"
                >
                  <div className="flex items-center justify-center mb-4">
                    <item.icon className="text-4xl text-blue-400 group-hover:text-blue-500 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-center text-sm">
                    {item.desc}
                  </p>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 