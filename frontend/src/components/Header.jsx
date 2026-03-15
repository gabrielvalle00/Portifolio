import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, Briefcase, Code, FolderGit2, Award, Mail, Github, Linkedin } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Sobre', href: '#about', icon: User },
    { label: 'Experiência', href: '#experience', icon: Briefcase },
    { label: 'Skills', href: '#skills', icon: Code },
    { label: 'Projetos', href: '#projects', icon: FolderGit2 },
    { label: 'Certificações', href: '#certifications', icon: Award },
    { label: 'Contato', href: '#contact', icon: Mail }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/gabrielvalle00', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/gabriel-valle-159170242/', label: 'LinkedIn' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="text-2xl font-black tracking-tighter"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span className="text-black">G</span>
              <span className="text-lime-500">V</span>
            </motion.a>

            {/* Desktop Navigation - Apple Store Style */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="group flex flex-col items-center gap-1 cursor-pointer"
                    whileHover={{ y: -3 }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 group-hover:bg-lime-100 transition-colors">
                      <Icon className="w-5 h-5 text-gray-700 group-hover:text-lime-500 transition-colors" />
                    </div>
                    <span className="text-xs font-medium text-gray-700 group-hover:text-lime-500 transition-colors">
                      {item.label}
                    </span>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Icons + Mobile Menu Button */}
            <div className="flex items-center gap-3">
              {/* Social Icons - Desktop */}
              <div className="hidden md:flex items-center gap-2">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-lime-500 text-gray-700 hover:text-white transition-all"
                      title={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 px-4">
              {/* Mobile Nav Items */}
              <div className="grid grid-cols-2 gap-6">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={index}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className="flex flex-col items-center gap-3 p-6 bg-gray-50 rounded-2xl hover:bg-lime-50 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white shadow-sm">
                        <Icon className="w-7 h-7 text-lime-500" />
                      </div>
                      <span className="text-sm font-semibold text-gray-700">{item.label}</span>
                    </motion.a>
                  );
                })}
              </div>

              {/* Mobile Social Links */}
              <div className="flex gap-4 pt-8 border-t border-gray-200">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 flex items-center justify-center rounded-lg bg-lime-500 text-white shadow-lg"
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
