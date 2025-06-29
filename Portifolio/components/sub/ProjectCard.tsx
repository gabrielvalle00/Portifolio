"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { cardVariant } from "@/utils/motion";

interface Props {
  src: string; // Caminho do vídeo ou da imagem
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  // Verifica se o arquivo é um vídeo baseado na extensão
  const isVideo = src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".ogg");

  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="relative overflow-hidden rounded-2xl shadow-2xl border border-primary-500/30 bg-gradient-to-br from-surface/50 to-surface/20 backdrop-blur-sm group"
    >
      {/* Image/Video Container */}
      <div className="relative overflow-hidden">
        {isVideo ? (
          <video
            src={src}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            controls
            loop
            muted
            autoPlay 
          />
        ) : (
          <div className="relative h-64 overflow-hidden">
            <Image
              src={src}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative p-6">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed text-base">
          {description}
        </p>
        
        {/* Tech Stack Badge */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium border border-primary-500/30">
            React
          </span>
          <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-medium border border-cyan-500/30">
            Node.js
          </span>
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium border border-blue-500/30">
            TypeScript
          </span>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard;
