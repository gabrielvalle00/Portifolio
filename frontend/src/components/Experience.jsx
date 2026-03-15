import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experience, education } from '../data/mock';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" ref={ref} className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-4">
              Experiência & Educação
            </h2>
            <div className="w-24 h-1 bg-lime-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div>
              <motion.div variants={itemVariants} className="flex items-center mb-8">
                <Briefcase className="w-8 h-8 text-lime-500 mr-3" />
                <h3 className="text-3xl font-bold text-black">Experiência Profissional</h3>
              </motion.div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime-500 to-lime-300"></div>

                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className="relative pl-8 pb-12 last:pb-0"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-4 h-4 bg-lime-500 rounded-full -translate-x-1.5 ring-4 ring-white"></div>

                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-gradient-to-br from-white to-lime-50/30 p-6 rounded-xl shadow-md border border-gray-100 hover:border-lime-200 transition-all"
                    >
                      <h4 className="text-xl font-bold text-black mb-2">{exp.role}</h4>
                      <div className="text-lg font-semibold text-lime-500 mb-3">{exp.company}</div>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">{exp.description}</p>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <span className="text-lime-500 mr-2 flex-shrink-0">▸</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <motion.div variants={itemVariants} className="flex items-center mb-8">
                <GraduationCap className="w-8 h-8 text-lime-500 mr-3" />
                <h3 className="text-3xl font-bold text-black">Formação Acadêmica</h3>
              </motion.div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime-500 to-lime-300"></div>

                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    variants={itemVariants}
                    className="relative pl-8 pb-12 last:pb-0"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-4 h-4 bg-lime-500 rounded-full -translate-x-1.5 ring-4 ring-white"></div>

                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-gradient-to-br from-white to-lime-50/30 p-6 rounded-xl shadow-md border border-gray-100 hover:border-lime-200 transition-all"
                    >
                      <h4 className="text-lg font-bold text-black mb-2">{edu.degree}</h4>
                      <div className="text-md font-semibold text-lime-500 mb-3">{edu.institution}</div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.period}
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          edu.status === 'Em andamento' 
                            ? 'bg-lime-100 text-lime-700' 
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
