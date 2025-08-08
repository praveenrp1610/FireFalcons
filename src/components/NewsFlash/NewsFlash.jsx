import React from 'react';
import { motion } from 'framer-motion';
import './NewsFlash.css';

const NewsFlash = () => {
  return (
    <motion.div 
      className="news-flash"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <div className="container">
        <motion.div 
          className="news-content"
          animate={{ 
            scale: [1, 1.02, 1],
            boxShadow: [
              "0 0 20px rgba(255, 69, 0, 0.5)",
              "0 0 30px rgba(255, 215, 0, 0.8)",
              "0 0 20px rgba(255, 69, 0, 0.5)"
            ]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.span 
            className="news-badge"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            🔥 BREAKING NEWS 🔥
          </motion.span>
          <motion.span 
            className="news-text"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Team Jersey Reveal Event Coming Soon
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NewsFlash;
