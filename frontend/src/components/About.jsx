import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo, stats } from '../data/mock';
import { Code2, Database, Sparkles, TrendingUp } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" ref={ref} className="py-24 px-4 bg-gradient-to-b from-white to-lime-50/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-4">
              Sobre Mim
            </h2>
            <div className="w-24 h-1 bg-lime-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Bio - Takes 3 columns */}
            <motion.div variants={itemVariants} className="md:col-span-3">
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-lime-500 to-lime-400 rounded-full"></div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {personalInfo.bio}
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-lime-200 transition-all"
                >
                  <Code2 className="w-6 h-6 text-lime-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-black text-sm">Fullstack Dev</h3>
                    <p className="text-xs text-gray-600">Web & Mobile</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-lime-200 transition-all"
                >
                  <Database className="w-6 h-6 text-lime-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-black text-sm">Data Analyst</h3>
                    <p className="text-xs text-gray-600">BI & Analytics</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-lime-200 transition-all"
                >
                  <Sparkles className="w-6 h-6 text-lime-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-black text-sm">Automação</h3>
                    <p className="text-xs text-gray-600">Power Platform</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-lime-200 transition-all"
                >
                  <TrendingUp className="w-6 h-6 text-lime-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-black text-sm">Insights</h3>
                    <p className="text-xs text-gray-600">Data-Driven</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Stats - Takes 2 columns */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-lime-200 transition-all"
                  >
                    <div className="text-4xl font-black text-lime-500 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
