import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-black tracking-tighter mb-4"
            >
              <span className="text-white">G</span>
              <span className="text-lime-400">V</span>
            </motion.div>
            <p className="text-gray-400 text-sm">
              Desenvolvedor Fullstack & Analista de Dados
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Transformando ideias em soluções digitais inovadoras
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {['Sobre', 'Experiência', 'Skills', 'Projetos', 'Certificações', 'Contato'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-lime-400 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center space-x-2 text-gray-400 hover:text-lime-400 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>{personalInfo.email}</span>
                </a>
              </li>
              <li className="flex space-x-3 mt-4">
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-lime-500 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-lime-500 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Gabriel Valle. Todos os direitos reservados.
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center hover:bg-lime-700 transition-colors shadow-lg"
            >
              <ArrowUp className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
