"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const certificates = [
  {
    id: 1,
    title: "Build and Secure Networks in Google Cloud",
    issuer: "Google Cloud",
    date: "mai 2023",
    iconUrl: "/google.png",
    color: "from-blue-500 to-blue-600",
    category: "Cloud",
    url: "https://www.cloudskillsboost.google/public_profiles/da885b0a-2a77-42ca-96af-fccf3df39b56/badges/3701447?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
  },
  {
    id: 2,
    title: "Create and Manage Cloud Resources",
    issuer: "Google Cloud",
    date: "jul 2022",
    iconUrl: "/google.png",
    color: "from-blue-500 to-blue-600",
    category: "Cloud",
    url: "https://www.cloudskillsboost.google/public_profiles/da885b0a-2a77-42ca-96af-fccf3df39b56/badges/2429300?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
  },
  {
    id: 3,
    title: "Perform Foundational Data, ML, and AI Tasks in Google Cloud",
    issuer: "Google Cloud",
    date: "jul 2022",
    iconUrl: "/google.png",
    color: "from-blue-500 to-blue-600",
    category: "Cloud",
    url: "https://www.cloudskillsboost.google/public_profiles/da885b0a-2a77-42ca-96af-fccf3df39b56/badges/2467931?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
  },
  {
    id: 4,
    title: "Perform Foundational Infrastructure Tasks in Google Cloud",
    issuer: "Google Cloud",
    date: "jul 2022",
    iconUrl: "/google.png",
    color: "from-blue-500 to-blue-600",
    category: "Cloud",
    url: "https://www.cloudskillsboost.google/public_profiles/da885b0a-2a77-42ca-96af-fccf3df39b56/badges/2449328?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
  },
  {
    id: 5,
    title: "Google Cloud Foundations",
    issuer: "SENAI São Paulo",
    date: "jul 2022",
    iconUrl: "/google.png",
    color: "from-blue-400 to-blue-500",
    category: "Cloud"
  },
  {
    id: 6,
    title: "Java",
    issuer: "SENAI São Paulo",
    date: "dez 2024",
    iconUrl: "/Java.png",
    color: "from-yellow-500 to-orange-500",
    category: "Desenvolvimento"
  },
  {
    id: 7,
    title: "Python",
    issuer: "SENAI São Paulo",
    date: "mar 2024",
    iconUrl: "/Python.png",
    color: "from-green-500 to-green-600",
    category: "Desenvolvimento"
  },
  {
    id: 8,
    title: "Microsoft Certified: Dynamics 365 + Power Platform Solution Architect Expert",
    issuer: "Lean Solutions Group / Microsoft",
    date: "jan 2024",
    iconUrl: "/microsoft.png",
    color: "from-blue-700 to-blue-900",
    category: "Cloud"
  },
  {
    id: 9,
    title: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    iconUrl: "/aws.png",
    color: "from-orange-500 to-orange-600",
    category: "Cloud"
  },
  {
    id: 10,
    title: "MongoDB Database Administrator",
    issuer: "MongoDB",
    date: "2024",
    iconUrl: "/mongodb.png",
    color: "from-green-500 to-green-600",
    category: "Database"
  },
  {
    id: 11,
    title: "Apache Spark",
    issuer: "Apache Software Foundation",
    date: "2024",
    iconUrl: "/spark.png",
    color: "from-orange-500 to-orange-600",
    category: "Data Engineering"
  },
  {
    id: 12,
    title: "MySQL Database",
    issuer: "Experiência Profissional",
    date: "2024",
    iconUrl: "/mysql.png",
    color: "from-yellow-400 to-yellow-600",
    category: "Database"
  },
  {
    id: 13,
    title: "Prisma ORM",
    issuer: "Experiência Profissional",
    date: "2024",
    iconUrl: "/prisma.webp",
    color: "from-gray-700 to-gray-900",
    category: "Database"
  },
  {
    id: 14,
    title: "Firebase Database",
    issuer: "Experiência Profissional",
    date: "2024",
    iconUrl: "/Firebase.png",
    color: "from-yellow-500 to-orange-500",
    category: "Database"
  },
  {
    id: 15,
    title: "GraphQL",
    issuer: "Experiência Profissional",
    date: "2024",
    iconUrl: "/graphql.png",
    color: "from-pink-500 to-purple-500",
    category: "Database"
  },
  {
    id: 20,
    title: "SQLite Database",
    issuer: "Experiência Profissional",
    date: "2024",
    iconUrl: "/sqlite.png",
    color: "from-gray-500 to-gray-700",
    category: "Database"
  },
  {
    id: 50,
    title: "Comunicação e Oratória",
    issuer: "Curso Livre",
    date: "2024",
    color: "from-green-400 to-green-700",
    category: "Soft Skills"
  },
  {
    id: 51,
    title: "Liderança",
    issuer: "Curso Livre",
    date: "2024",
    color: "from-purple-400 to-purple-700",
    category: "Soft Skills"
  },
  {
    id: 52,
    title: "Trabalho em Equipe",
    issuer: "Experiência Profissional",
    date: "2024",
    color: "from-blue-400 to-blue-700",
    category: "Soft Skills"
  },
  {
    id: 53,
    title: "Resolução de Problemas",
    issuer: "Experiência Profissional",
    date: "2024",
    color: "from-yellow-400 to-yellow-700",
    category: "Soft Skills"
  },
  {
    id: 54,
    title: "Proatividade",
    issuer: "Experiência Profissional",
    date: "2024",
    color: "from-pink-400 to-pink-700",
    category: "Soft Skills"
  },
  {
    id: 55,
    title: "Inteligência Emocional",
    issuer: "Curso Livre",
    date: "2024",
    color: "from-blue-400 to-purple-700",
    category: "Soft Skills"
  },
  {
    id: 56,
    title: "Aprendizado Contínuo",
    issuer: "Experiência Profissional",
    date: "2024",
    color: "from-green-400 to-blue-700",
    category: "Soft Skills"
  }
].filter(cert => cert.iconUrl);

const categories = ["Todas", "Cloud", "Database"];

// Descrição para a categoria Development
const categoryDescriptions: Record<string, string> = {
  Cloud: "Certificações em provedores de nuvem, infraestrutura e serviços cloud.",
  Database: "Certificações e experiência em bancos de dados relacionais e NoSQL.",
  Development: "Certificações e habilidades em linguagens de programação, frameworks, automação e boas práticas de desenvolvimento de software.",
  Security: "Certificações em segurança da informação, proteção de dados e práticas seguras.",
};

// SVGs fallback como componentes React
const CloudIcon = () => (
  <svg className="w-10 h-10 mx-auto text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 00.2-10A7 7 0 003 15z" /></svg>
);
const DatabaseIcon = () => (
  <svg className="w-10 h-10 mx-auto text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.657 4.03 3 9 3s9-1.343 9-3V5" /><path d="M3 12c0 1.657 4.03 3 9 3s9-1.343 9-3" /></svg>
);
const SoftSkillsIcon = () => (
  <svg className="w-10 h-10 mx-auto text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4" /><path d="M5.5 21a7.5 7.5 0 0113 0" /></svg>
);
const DefaultIcon = () => (
  <svg className="w-10 h-10 mx-auto text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /></svg>
);

// Componente para exibir o ícone ou fallback
const CertificateIcon = ({ iconUrl, category, title }: { iconUrl?: string, category: string, title: string }) => {
  const [imgError, setImgError] = useState(false);
  if (iconUrl && !imgError) {
    return (
      <img
        src={iconUrl}
        alt={title}
        className="w-10 h-10 object-contain rounded-xl mx-auto"
        style={{ maxHeight: 40, maxWidth: 48 }}
        onError={() => setImgError(true)}
      />
    );
  }
  if (category === 'Cloud') return <CloudIcon />;
  if (category === 'Database') return <DatabaseIcon />;
  if (category === 'Soft Skills') return <SoftSkillsIcon />;
  return <DefaultIcon />;
};

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("Todas");

  const filteredCertificates = selectedCategory === "Todas" 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  return (
    <section id="certificates" className="py-10 sm:py-16 md:py-20">
      <div className="container mx-auto px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-10 md:mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2 sm:mb-4">
            Certificações Técnicas
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-medium drop-shadow mb-2">
            Cada certificado representa uma conquista e um novo nível de excelência em tecnologia.
          </p>
        </motion.div>
        <p className="text-md text-blue-200 mb-4 sm:mb-8 min-h-[32px] transition-all duration-300 text-center">
          {categoryDescriptions[selectedCategory] || ""}
        </p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        {/* Carrossel de Certificados */}
        <div className="relative">
          <div className="flex overflow-x-auto overflow-y-hidden gap-8 sm:gap-10 md:gap-12 pb-6 px-4 sm:px-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary-500/40 scrollbar-track-transparent"
            style={{ WebkitOverflowScrolling: 'touch', height: '370px', minHeight: '370px', maxHeight: '370px' }}>
            {filteredCertificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.04, boxShadow: '0 8px 32px 0 #a78bfa33' }}
                className="group relative hover:ring-2 hover:ring-cyan-400 min-w-[320px] max-w-xs snap-center"
                style={{ height: '340px', minHeight: '340px', maxHeight: '340px' }}
              >
                <div className="rounded-2xl p-6 h-full border border-primary-500/30 hover:border-cyan-400 transition-all duration-300 shadow-xl hover:shadow-2xl backdrop-blur-md bg-white/10 hover:bg-white/20 flex flex-col justify-between">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div whileHover={{ rotate: 8, scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
                      <CertificateIcon iconUrl={cert.iconUrl} category={cert.category} title={cert.title} />
                    </motion.div>
                    <FaCertificate className="text-2xl text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>
                  {(cert.date.includes('2023') || cert.date.includes('2024')) && (
                    <span className="absolute top-3 right-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs px-3 py-1 rounded-full shadow font-bold animate-pulse">Novo</span>
                  )}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-gray-300 mb-3">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">
                      {cert.date}
                    </span>
                    <span className="px-3 py-1 bg-gray-700/70 text-gray-200 text-xs rounded-full">
                      {cert.category}
                    </span>
                  </div>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-full text-xs font-semibold hover:bg-blue-700 transition-colors duration-300 shadow"
                    >
                      Exibir credencial
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Totais fixos embaixo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="sticky bottom-0 left-0 w-full pt-8 mt-8 z-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-1 drop-shadow-lg">
                {certificates.length}+
              </div>
              <div className="text-base text-gray-300">Certificações</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-green-400 mb-1 drop-shadow-lg">
                5
              </div>
              <div className="text-base text-gray-300">Google Cloud</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-purple-400 mb-1 drop-shadow-lg">
                3+
              </div>
              <div className="text-base text-gray-300">Provedores Cloud</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-orange-400 mb-1 drop-shadow-lg">
                100%
              </div>
              <div className="text-base text-gray-300">Atualizadas</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates; 