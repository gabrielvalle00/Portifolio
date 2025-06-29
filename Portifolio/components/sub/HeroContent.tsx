"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  fadeIn,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import AboutModal from "../sub/AboutModal";
import StatusProjeto from "./StatusProjeto";

const HeroContent = () => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-4 lg:px-20 mt-20 lg:mt-40 w-full z-[20] gap-8 lg:gap-12"
    >
      {/* Left Content */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start max-w-2xl">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] w-fit"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            <span>Fornecendo</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500">
              a melhor
            </span>
            <br />
            <span>experiência de projeto</span>
          </h2>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg md:text-xl lg:text-2xl text-gray-300 my-8 leading-relaxed"
        >
          Sou Desenvolvedor Full Stack com experiência em desenvolvimento de sites, aplicativos móveis e soluções digitais inovadoras. Confira meus projetos e habilidades!
        </motion.p>

        <motion.div variants={fadeIn(1.0)}>
          <StatusProjeto />
        </motion.div>
      </div>

      {/* Right Content - Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-auto h-full flex justify-center items-center"
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-blue-500/20 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500 animate-pulse"></div>
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={500}
            width={500}
            className="relative z-10 transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </motion.div>

      {/* Modal Sobre mim */}
      <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />
    </motion.div>
  );
};

export default HeroContent;
