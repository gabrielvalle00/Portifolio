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

      {/* Frontend Skills */}
      <motion.div 
        variants={cardVariant}
        className="w-full max-w-6xl mb-12"
      >
        <h3 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg tracking-wide uppercase">
          Frontend
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {[...new Set(Frontend_skill.map((image) => image.Image))].map((img, index) => {
            const skill = Frontend_skill.find((s) => s.Image === img);
            return skill ? (
              <div key={index} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-surface/30 to-surface/10 backdrop-blur-sm border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <SkillDataProvider
                  src={skill.Image}
                  width={skill.width}
                  height={skill.height}
                  index={index}
                />
                <span className="mt-3 text-sm text-gray-200 font-semibold text-center tracking-wide">{skill.skill_name}</span>
              </div>
            ) : null;
          })}
        </div>
      </motion.div>

      {/* Backend Skills */}
      <motion.div 
        variants={cardVariant}
        className="w-full max-w-6xl mb-12"
      >
        <h3 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg tracking-wide uppercase">
          Backend
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {[...new Set(Backend_skill.map((image) => image.Image))].map((img, index) => {
            const skill = Backend_skill.find((s) => s.Image === img);
            return skill ? (
              <div key={index} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-surface/30 to-surface/10 backdrop-blur-sm border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <SkillDataProvider
                  src={skill.Image}
                  width={skill.width}
                  height={skill.height}
                  index={index}
                />
                <span className="mt-3 text-sm text-gray-200 font-semibold text-center tracking-wide">{skill.skill_name}</span>
              </div>
            ) : null;
          })}
        </div>
      </motion.div>

      {/* Full Stack Skills */}
      <motion.div 
        variants={cardVariant}
        className="w-full max-w-6xl mb-12"
      >
        <h3 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg tracking-wide uppercase">
          Full Stack
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {[...new Set(Full_stack.map((image) => image.Image))].map((img, index) => {
            const skill = Full_stack.find((s) => s.Image === img);
            return skill ? (
              <div key={index} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-surface/30 to-surface/10 backdrop-blur-sm border border-primary-500/20 hover:border-primary-500/40 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <SkillDataProvider
                  src={skill.Image}
                  width={skill.width}
                  height={skill.height}
                  index={index}
                />
                <span className="mt-3 text-sm text-gray-200 font-semibold text-center tracking-wide">{skill.skill_name}</span>
              </div>
            ) : null;
          })}
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
