"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import AboutModal from "../sub/AboutModal";

const Navbar = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "instagram":
        return <FaInstagram className="w-6 h-6 text-gray-300 hover:text-accent-400 transition-colors duration-300" />;
      case "discord":
        return <RxDiscordLogo className="w-6 h-6 text-gray-300 hover:text-accent-400 transition-colors duration-300" />;
      case "linkedin":
        return <FaLinkedin className="w-6 h-6 text-gray-300 hover:text-secondary-400 transition-colors duration-300" />;
      case "github":
        return <FaGithub className="w-6 h-6 text-gray-300 hover:text-gray-100 transition-colors duration-300" />;
      case "email":
        return <MdEmail className="w-6 h-6 text-gray-300 hover:text-accent-400 transition-colors duration-300" />;
      default:
        return null;
    }
  };

  const navItems = [
    { href: "#skills", label: "Skills" },
    { href: "#certificates", label: "Certificações" },
    { href: "#projects", label: "Projetos" },
    { href: "#contact", label: "Contato" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-500 ${
          isScrolled 
            ? 'bg-surface/95 backdrop-blur-md shadow-glow border-b border-primary-500/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[70px]">
            {/* Logo e nome */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={() => setShowAbout(true)}
              className="flex items-center gap-2 bg-transparent border-none outline-none cursor-pointer group px-2"
              aria-label="Abrir informações sobre Gabriel Valle"
            >
              <div className="relative">
                <Image
                  src="/ValleDevLogo.svg"
                  alt="ValleDev Logo"
                  width={40}
                  height={40}
                  className="cursor-pointer transition-transform duration-300 group-hover:scale-110 group-hover:animate-slowspin"
                />
              </div>
              <span className="font-poppins font-bold text-lg text-white tracking-wide hidden md:block group-hover:text-primary-300 transition-colors duration-300 ml-1">
                ValleDev
              </span>
            </motion.button>

            {/* Menu centralizado - Desktop */}
            <div className="hidden md:flex flex-1 justify-center ml-2">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center gap-1 px-4 py-2 rounded-full glass border border-primary-500/30 shadow-glow"
              >
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-white font-medium px-3 py-2 rounded-full hover:bg-gradient-primary hover:text-white transition-all duration-300 focus-ring"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 rounded-lg glass border border-primary-500/30"
              aria-label="Menu mobile"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6 text-white transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>

            {/* Ícones sociais - Desktop */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="hidden md:flex flex-row gap-4 items-center"
            >
              {Socials.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="hover:scale-110 transition-transform duration-300 focus-ring p-2 rounded-lg"
                  title={social.name}
                  aria-label={`Abrir ${social.name} em nova aba`}
                >
                  {getIcon(social.icon)}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-4 space-y-2">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      whileHover={{ x: 10 }}
                      className="block px-4 py-2 text-white hover:bg-primary-500/20 rounded-lg transition-all duration-300"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                  <div className="flex justify-center gap-4 pt-4 border-t border-primary-500/30">
                    {Socials.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.href || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-lg bg-primary-500/20"
                        title={social.name}
                      >
                        {getIcon(social.icon)}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
      
      <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />
    </>
  );
};

export default Navbar;
