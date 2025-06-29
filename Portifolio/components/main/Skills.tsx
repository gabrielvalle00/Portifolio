"use client";

import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Skill_data,
} from "@/constants";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant, cardVariant } from "@/utils/motion";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      id="skills"
      className="flex flex-col items-center justify-center gap-8 h-full relative overflow-hidden pb-20 py-20"
    >
      <motion.div variants={textVariant}>
        <SkillText />
      </motion.div>

      {/* Skills Grid - Main Skills */}
      <motion.div 
        variants={cardVariant}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full max-w-6xl"
      >
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </motion.div>

      {/* Frontend Skills */}
      <motion.div 
        variants={cardVariant}
        className="w-full max-w-6xl"
      >
        <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Frontend
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {Frontend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      </motion.div>

      {/* Backend Skills */}
      <motion.div 
        variants={cardVariant}
        className="w-full max-w-6xl"
      >
        <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Backend
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {Backend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      </motion.div>

      {/* Full Stack Skills */}
      <motion.div 
        variants={cardVariant}
        className="w-full max-w-6xl"
      >
        <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Full Stack
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Full_stack.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      </motion.div>

      {/* Background Video */}
      <div className="w-full h-full absolute inset-0 -z-10">
        <div className="w-full h-full z-0 opacity-20 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
