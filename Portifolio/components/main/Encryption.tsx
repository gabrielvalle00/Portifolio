"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop, fadeIn, scaleIn } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col relative items-center justify-center min-h-screen w-full h-full"
    >
      {/* Section Title + Subtítulo */}
      <motion.div 
        variants={slideInFromTop}
        className="flex flex-col items-center w-full mt-4 z-20 relative mb-10"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-center text-gray-200 mb-4">
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500">
            {" "}&{" "}
          </span>
          Security
        </h2>
        <p className="text-xl md:text-2xl font-medium text-center text-gray-300 max-w-2xl leading-relaxed">
          Proteja seus dados com criptografia de ponta a ponta e performance otimizada
        </p>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        variants={fadeIn(0.5)}
        className="flex flex-col items-center justify-center z-20 w-auto h-auto"
      >
        {/* Lock Animation */}
        <motion.div 
          variants={scaleIn(0.8)}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center group cursor-pointer w-auto h-auto mb-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/LockTop.png"
              alt="Lock top"
              width={50}
              height={50}
              className="w-[50px] transition-all duration-200 group-hover:translate-y-11"
            />
          </motion.div>
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className="z-10"
          />
        </motion.div>

        {/* Encryption Badge */}
        <motion.div 
          variants={fadeIn(1.0)}
          whileHover={{ scale: 1.05 }}
          className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042f88b] opacity-[0.9] cursor-pointer"
        >
          <h3 className="Welcome-text text-[12px] font-medium">Criptografia Avançada</h3>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={fadeIn(1.2)}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl"
        >
          {[
            { title: "Segurança", desc: "Criptografia de ponta a ponta", icon: "🔒" },
            { title: "Performance", desc: "Otimização para máxima velocidade", icon: "⚡" },
            { title: "Confiabilidade", desc: "99.9% de uptime garantido", icon: "🛡️" }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-surface/30 to-surface/10 backdrop-blur-sm border border-primary-500/20 text-center group hover:border-primary-500/40 transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-300 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Background Video */}
      <div className="w-full flex items-start justify-center absolute z-0 inset-0">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover opacity-20"
          src="/encryption.webm"
        />
      </div>
    </motion.div>
  );
};

export default Encryption;
