"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FaMapMarkerAlt, FaHandshake, FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal = ({ isOpen, onClose }: AboutModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
        >
          {/* Modal Content */}
          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
            className="relative w-full max-w-3xl rounded-4xl shadow-glow bg-gradient-to-br from-[#1a103a]/90 via-[#12092b]/95 to-[#2e1065]/90 border border-primary-500/30 px-3 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 glass animate-fade-in-up max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-primary-500/40 scrollbar-track-transparent"
            tabIndex={-1}
            aria-modal="true"
            role="dialog"
          >
            {/* Botão de fechar */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-gray-400 hover:text-primary-400 transition-colors z-10 text-3xl p-2 rounded-full bg-black/20 hover:bg-primary-500/20 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Fechar modal"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>

            {/* Foto com glow e badge */}
            <div className="flex flex-col items-center justify-center md:justify-start md:items-start gap-2 sm:gap-4 min-w-[120px] sm:min-w-[180px] md:min-w-[220px]">
              <div className="relative">
                <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-primary-500 via-accent-400 to-secondary-400 p-1 animate-glow shadow-glow">
                  <div className="w-full h-full rounded-full bg-[#030014] flex items-center justify-center overflow-hidden">
                    <Image
                      src="/profile.jpg"
                      quality={100}
                      alt="Gabriel Valle"
                      width={120}
                      height={120}
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                </div>
                {/* Badge Full Stack */}
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-400 text-white text-[10px] sm:text-xs font-bold shadow-md border border-primary-400 animate-fade-in-up">
                  Full Stack
                </span>
              </div>
            </div>

            {/* Conteúdo do modal */}
            <div className="flex-1 flex flex-col justify-center gap-4">
              {/* Título com gradiente */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl sm:text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 bg-clip-text text-transparent mb-2 text-center md:text-left"
              >
                Desenvolvedor Full Stack apaixonado por tecnologia e inovação
              </motion.h2>

              {/* Descrição */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-200 space-y-2 sm:space-y-3 mb-2 text-sm sm:text-base md:text-lg text-center md:text-left"
              >
                <p>
                  Minha trajetória começou com a curiosidade de entender o funcionamento das coisas e evoluiu para a criação de soluções digitais que impactam pessoas e negócios. Tenho experiência em projetos web e mobile, APIs, integrações e foco total em entregar valor real.
                </p>
                <p>
                  <span className="font-bold text-white">Experiência:</span> Desenvolvimento de aplicações web responsivas, APIs RESTful, integrações, bancos de dados e soluções escaláveis.
                </p>
                <p>
                  <span className="font-bold text-white">Tecnologias:</span> React, Next.js, Node.js, TypeScript, Python, Java e outras ferramentas modernas.
                </p>
                <p>
                  <span className="font-bold text-white">Objetivo:</span> Criar experiências digitais excepcionais que resolvam problemas reais e agreguem valor aos usuários e empresas.
                </p>
              </motion.div>

              {/* Contatos em linha com animação */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 mt-4 items-center justify-center md:justify-start"
              >
                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-light/60 text-white font-medium">
                  <FaMapMarkerAlt className="text-pink-400" />
                  Brasil
                </span>
                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-light/60 text-white font-medium">
                  <FaHandshake className="text-cyan-400" />
                  Aberto para novas oportunidades
                </span>
                <a
                  href="https://www.linkedin.com/in/gabriel-valle-159170242/"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow hover:scale-105 hover:shadow-lg transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-lg" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/gabrielvalle00"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white font-medium shadow hover:scale-105 hover:shadow-lg transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-lg" />
                  GitHub
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AboutModal; 