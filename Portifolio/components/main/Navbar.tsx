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
  const [active, setActive] = useState<string>("#skills");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scrollspy: atualiza o item ativo conforme a seção visível
  useEffect(() => {
    const sectionIds = navItems.map(item => item.href.replace('#', ''));
    const sections = sectionIds.map(id => document.getElementById(id));
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(`#${entry.target.id}`);
        }
      });
    };
    const observer = new window.IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    });
    sections.forEach(section => {
      if (section) observer.observe(section);
    });
    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
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
              className="flex items-center gap-3 bg-transparent border-none outline-none cursor-pointer group px-2"
              aria-label="Abrir informações sobre Gabriel Valle"
            >
              <div className="relative flex items-center justify-center">
                {/* SVG moderno inspirado em laboratório/tecnologia para Gv Lab */}
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.2" />
                    </radialGradient>
                    <linearGradient id="main-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#a78bfa" />
                      <stop offset="1" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <circle cx="20" cy="20" r="18" fill="url(#main-gradient)" />
                  <ellipse cx="20" cy="20" rx="14" ry="14" fill="url(#glow)" />
                  {/* Frasco estilizado */}
                  <rect x="16" y="10" width="8" height="14" rx="4" fill="#fff" fillOpacity="0.15" />
                  <rect x="18" y="8" width="4" height="6" rx="2" fill="#fff" fillOpacity="0.25" />
                  <path d="M18 24 Q20 28 22 24" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  {/* Letras Gv */}
                  <text x="50%" y="70%" textAnchor="middle" fontSize="11" fontFamily="Poppins,Arial,sans-serif" fill="#fff" fontWeight="bold" dy=".1em">Gv</text>
                </svg>
              </div>
              <span className="font-poppins font-bold text-lg text-white tracking-wide md:block group-hover:text-primary-300 transition-colors duration-300 ml-1">
                Gv Lab
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
                    whileHover={{ scale: 1.08, boxShadow: '0 2px 16px 0 #a78bfa55' }}
                    whileTap={{ scale: 0.95 }}
                    className={`text-white font-medium px-3 py-2 transition-all duration-300 relative ${active === item.href ? 'font-bold' : 'hover:text-cyan-300'}`}
                    onClick={e => {
                      e.preventDefault();
                      setActive(item.href);
                      handleNavClick(item.href);
                    }}
                  >
                    {item.label}
                    {active === item.href && !isScrolled && (
                      <></>
                    )}
                    {active === item.href && isScrolled && (
                      <motion.span layoutId="nav-underline" className="absolute left-2 right-2 -bottom-1 h-1 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
                    )}
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
                animate={{ opacity: 1, height: '100vh' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="fixed inset-0 z-[9999] bg-black/90 flex flex-col items-center justify-center gap-8 p-8"
              >
                <div className="flex flex-col items-center gap-6 w-full">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-2xl font-bold text-white py-4 px-8 rounded-lg w-full text-center bg-gradient-to-r from-primary-500/20 to-cyan-500/20 border border-primary-500/30 mb-2"
                      onClick={e => {
                        e.preventDefault();
                        setActive(item.href);
                        handleNavClick(item.href);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </motion.a>
          ))}
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
