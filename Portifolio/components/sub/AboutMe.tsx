"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const AboutMe = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      {/* Left Content - Text */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* Badge */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Sobre Gabriel Valle
          </h1>
        </motion.div>

        {/* Main Title */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Desenvolvedor
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Full Stack{" "}
            </span>
            apaixonado por tecnologia
          </span>
        </motion.div>

        {/* Description */}
        <motion.div
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] space-y-4"
        >
          <p>
            Sou um desenvolvedor Full Stack com experiência em desenvolvimento de aplicações web e mobile. 
            Minha jornada na tecnologia começou com a curiosidade de entender como as coisas funcionam, 
            e hoje transformo ideias em soluções digitais inovadoras.
          </p>
          
          <p>
            <strong className="text-white">Experiência:</strong> Desenvolvimento de aplicações web responsivas, 
            APIs RESTful, integração com bancos de dados, e implementação de soluções escaláveis.
          </p>
          
          <p>
            <strong className="text-white">Tecnologias:</strong> React, Next.js, Node.js, TypeScript, 
            Python, Java, e outras ferramentas modernas do ecossistema de desenvolvimento.
          </p>
          
          <p>
            <strong className="text-white">Objetivo:</strong> Criar experiências digitais excepcionais 
            que resolvam problemas reais e agreguem valor aos usuários.
          </p>
        </motion.div>
        
        {/* Contact Info */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-col gap-3"
        >
          <div className="flex items-center gap-3 text-gray-300">
            <span className="text-purple-400">📧</span>
            <span>gabrivalle8@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <span className="text-purple-400">📍</span>
            <span>Brasil</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <span className="text-purple-400">💼</span>
            <span>Disponível para projetos freelancer</span>
          </div>
        </motion.div>
      </div>

      {/* Right Content - Profile Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <div className="relative">
          <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 p-1">
            <div className="w-full h-full rounded-full bg-[#030014] flex items-center justify-center">
              <Image
                src="/profiol3.png"
                alt="Gabriel Valle"
                width={300}
                height={300}
                className="rounded-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl">👨‍💻</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe; 