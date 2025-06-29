"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop, fadeIn } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className='w-full h-auto flex flex-col items-center justify-center text-center'
    >
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-6"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px] font-medium">            
          Pense melhor com Next.js 13
        </h1>
      </motion.div>
      
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-4 leading-tight'
      >
        Fazendo aplicativos com
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
          {" "}tecnologias modernas
        </span>
      </motion.div>
      
      <motion.div
        variants={slideInFromRight(0.5)}
        className='text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed'
      >
        Nunca perca uma tarefa, prazo ou ideia. Desenvolvimento eficiente e inovador.
      </motion.div>

      <motion.div
        variants={fadeIn(0.8)}
        className="flex flex-wrap justify-center gap-4 mb-8"
      >
        {[
          { label: "Frontend", color: "from-purple-400 to-cyan-400" },
          { label: "Backend", color: "from-cyan-400 to-blue-400" },
          { label: "Mobile", color: "from-blue-400 to-purple-400" }
        ].map((tech, index) => (
          <motion.span
            key={tech.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className={`px-4 py-2 rounded-full bg-gradient-to-r ${tech.color} text-white font-medium text-sm shadow-lg`}
          >
            {tech.label}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default SkillText