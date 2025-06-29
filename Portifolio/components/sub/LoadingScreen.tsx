"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hideLoading = () => {
      setIsVisible(false);
    };

    // Hide loading screen when page is loaded
    if (document.readyState === 'complete') {
      hideLoading();
    } else {
      window.addEventListener('load', hideLoading);
      return () => window.removeEventListener('load', hideLoading);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center space-y-6">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    GV
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Loading Spinner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary-500/30 border-t-primary-500"></div>
              <div className="absolute inset-0 h-12 w-12 animate-spin rounded-full border-4 border-transparent border-t-cyan-500" style={{ animationDelay: '-0.5s' }}></div>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-center"
            >
              <p className="text-lg font-medium text-gray-300 mb-2">Carregando...</p>
              <p className="text-sm text-gray-500">Preparando sua experiência</p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-48 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-white/20 rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen; 