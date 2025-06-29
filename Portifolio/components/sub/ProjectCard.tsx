"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { cardVariant } from "@/utils/motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  src: string;
  title: string;
  description: string;
  technologies?: string[];
  githubUrl?: string;
  liveUrl?: string;
  category?: string;
  index?: number;
  videoUrl?: string;
}

const ProjectCard = ({ 
  src, 
  title, 
  description, 
  technologies = [], 
  githubUrl, 
  liveUrl, 
  category = "Projeto",
  index = 0,
  videoUrl
}: Props) => {
  const isVideo = (videoUrl && (videoUrl.endsWith(".mp4") || videoUrl.endsWith(".webm") || videoUrl.endsWith(".ogg")));

  return (
    <motion.div
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative overflow-hidden rounded-2xl shadow-lg border border-primary-500/30 bg-gradient-to-br from-surface/50 to-surface/20 backdrop-blur-sm group h-full flex flex-col w-full min-h-[420px] max-h-[520px] min-w-[90vw] max-w-[95vw] sm:min-w-[340px] sm:max-w-[340px] md:min-w-[380px] md:max-w-[380px] lg:min-w-[420px] lg:max-w-[420px] p-0"
    >
      {/* Image/Video Container */}
      <div className="relative overflow-hidden h-40 sm:h-48 md:h-52 lg:h-56">
        {isVideo ? (
          <video
            src={videoUrl}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loop
            muted
            autoPlay
            playsInline
            onError={(e) => {
              const parent = (e.target as HTMLElement).parentNode;
              if (parent) {
                (parent as HTMLElement).innerHTML = `<img src='${src}' alt='${title}' style='width:100%;height:100%;object-fit:cover;border-radius:inherit;' />`;
              }
            }}
          />
        ) : (
          <div className="relative h-full overflow-hidden">
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
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-primary-500 to-cyan-500 text-white text-xs font-bold shadow-lg">
            {category}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-primary-500 transition-colors duration-300"
              title="Ver no GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-cyan-500 transition-colors duration-300"
              title="Ver projeto ao vivo"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed text-sm flex-1 mb-4">
          {description}
        </p>
        
        {/* Tech Stack */}
        {technologies.length > 0 && (
          <div className="mt-auto">
            <h4 className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
              Tecnologias utilizadas
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-2 py-1 rounded-md bg-primary-500/20 text-primary-300 text-xs font-medium border border-primary-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard;
