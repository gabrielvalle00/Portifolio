import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { certifications } from '../data/mock';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Todas' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'database', label: 'Database' },
    { id: 'development', label: 'Development' }
  ];

  const filteredCertifications = activeFilter === 'all'
    ? certifications
    : certifications.filter(cert => cert.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="certifications" ref={ref} className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-4">
              Certificações
            </h2>
            <div className="w-24 h-1 bg-lime-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4">Cada certificado representa uma conquista e um novo nível de excelência</p>
          </motion.div>

          {/* Filters */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  activeFilter === filter.id
                    ? 'bg-lime-500 text-white shadow-lg shadow-lime-300'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Certifications Grid */}
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCertifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-white to-lime-50/30 p-6 rounded-xl shadow-md border border-gray-100 hover:border-lime-200 transition-all group"
              >
                {/* Badge Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center group-hover:bg-lime-200 transition-colors">
                    <Award className="w-6 h-6 text-lime-500" />
                  </div>
                  {cert.credentialUrl && (
                    <motion.a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-lime-500 hover:text-lime-700"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-black mb-2 line-clamp-2 group-hover:text-lime-500 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-lime-500 mb-2">{cert.issuer}</p>
                <p className="text-xs text-gray-600 mb-3">{cert.date}</p>
                
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-lime-100 text-lime-700 text-xs font-semibold rounded-full capitalize">
                  {cert.category}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-lime-50 to-white rounded-xl shadow-md border border-gray-100">
              <div className="text-4xl font-black text-lime-500 mb-2">16+</div>
              <div className="text-sm text-gray-600 font-medium">Certificações</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-lime-50 to-white rounded-xl shadow-md border border-gray-100">
              <div className="text-4xl font-black text-lime-500 mb-2">5</div>
              <div className="text-sm text-gray-600 font-medium">Google Cloud</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-lime-50 to-white rounded-xl shadow-md border border-gray-100">
              <div className="text-4xl font-black text-lime-500 mb-2">3+</div>
              <div className="text-sm text-gray-600 font-medium">Provedores Cloud</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-lime-50 to-white rounded-xl shadow-md border border-gray-100">
              <div className="text-4xl font-black text-lime-500 mb-2">100%</div>
              <div className="text-sm text-gray-600 font-medium">Atualizadas</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
