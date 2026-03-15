import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../data/mock';
import { Mail, Phone, Github, Linkedin, Send, Loader2 } from 'lucide-react';
import { toast } from '../hooks/use-toast';
import { sendContact } from '../lib/api';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendContact({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Responderei em breve!",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      let msg = "Erro ao enviar. Tente novamente.";
      const detail = err.response?.data?.detail;
      if (Array.isArray(detail) && detail.length > 0) {
        msg = detail.map((d) => d.msg || d.message).join(", ") || msg;
      } else if (typeof detail === "string") {
        msg = detail;
      } else if (err.message) {
        msg = err.message;
      }
      toast({
        title: "Erro ao enviar",
        description: msg,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-4 bg-gradient-to-b from-lime-50/30 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-4">
              Vamos Trabalhar Juntos?
            </h2>
            <div className="w-24 h-1 bg-lime-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 text-lg">
              Estou sempre aberto a novas oportunidades e parcerias
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-black mb-6">Informações de Contato</h3>
              
              <div className="space-y-4 mb-8">
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md border border-gray-100 hover:border-lime-200 transition-all group"
                >
                  <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center group-hover:bg-lime-500 transition-colors">
                    <Mail className="w-6 h-6 text-lime-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold uppercase">Email</div>
                    <div className="text-black font-semibold">{personalInfo.email}</div>
                  </div>
                </motion.a>

                <motion.a
                  href={`tel:${personalInfo.phone}`}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md border border-gray-100 hover:border-lime-200 transition-all group"
                >
                  <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center group-hover:bg-lime-500 transition-colors">
                    <Phone className="w-6 h-6 text-lime-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold uppercase">Telefone</div>
                    <div className="text-black font-semibold">{personalInfo.phone}</div>
                  </div>
                </motion.a>
              </div>

              {/* Social Links */}
              <h4 className="text-lg font-bold text-black mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-black rounded-lg flex items-center justify-center hover:bg-lime-500 transition-colors shadow-lg"
                >
                  <Github className="w-6 h-6 text-white" />
                </motion.a>
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-lime-500 transition-colors shadow-lg"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all resize-none"
                    placeholder="Sua mensagem..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-lime-500 text-white font-bold rounded-lg shadow-lg hover:bg-lime-700 hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  <span>{isSubmitting ? "Enviando..." : "Enviar Mensagem"}</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
