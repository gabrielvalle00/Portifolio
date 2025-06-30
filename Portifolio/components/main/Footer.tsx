"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Definir tipo explícito para os links do footer
interface FooterLink {
  icon: React.ReactNode;
  label: string;
  href: string;
  onClick?: () => void;
}

const Footer = () => {
  const footerSections: { title: string; links: FooterLink[] }[] = [
    {
      title: "Comunidade",
      links: [
        {
          icon: <RxGithubLogo />,
          label: "GitHub",
          href: "https://github.com/gabrielvalle00",
        },
        {
          icon: <RxDiscordLogo />,
          label: "Discord",
          href: "https://discord.com",
        },
      ],
    },
    {
      title: "Redes Sociais",
      links: [
        {
          icon: <FaInstagram />,
          label: "Instagram",
          href: "https://instagram.com",
        },
        {
          icon: <FaLinkedin />,
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/gabriel-valle-159170242/",
        },
      ],
    },
    {
      title: "Contato",
      links: [
        {
          icon: <MdEmail />,
          label: "Enviar Email",
          href: "#",
        },
      ],
    },
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full h-full bg-gradient-to-t from-surface/50 to-transparent text-gray-200 shadow-lg p-[15px] mt-10 border-t border-primary-500/20"
    >
      <div className="w-full flex flex-col items-center justify-center m-auto">
        {/* Footer Content */}
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-around flex-wrap gap-8 md:gap-16">
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1, duration: 0.6 }}
              className="min-w-[200px] h-auto flex flex-col items-center justify-start"
            >
              <div className="font-bold text-[16px] mb-4 bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                {section.title}
              </div>
              {section.links.map((link, linkIndex) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href !== "#" ? "_blank" : undefined}
                  rel={link.href !== "#" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (sectionIndex * 0.1) + (linkIndex * 0.05), duration: 0.6 }}
                  whileHover={{ x: 5, scale: 1.05 }}
                  className="flex flex-row items-center my-[10px] cursor-pointer hover:text-purple-400 transition-all duration-300 group px-2 py-2 rounded-lg min-w-[120px] justify-center"
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </span>
                  <span className="text-[15px] ml-[6px] group-hover:font-medium transition-all duration-300">
                    {link.label}
                  </span>
                </motion.a>
              ))}
              {section.title === "Contato" && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (sectionIndex * 0.1) + 0.1, duration: 0.6 }}
                  className="flex flex-row items-center my-[10px] text-[15px] ml-[6px] text-gray-400 italic"
                >
                  Aberto para novas oportunidades e parcerias
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
     
        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 mb-[10px] text-[15px] text-center text-gray-400 border-t border-primary-500/20 pt-6 w-full"
        >
          &copy; {new Date().getFullYear()} Gabriel Valle. Todos os direitos reservados.
        </motion.div>


      </div>
    </motion.footer>
  );
};

export default Footer;