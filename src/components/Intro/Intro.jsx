import React from 'react';
import { motion } from 'framer-motion';
import { teamStats } from '../../data/teamData';
import './Intro.css';

const Intro = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="intro-section">
      <div className="intro-background">
        <div className="fire-animation"></div>
        <div className="particles"></div>
      </div>
      
      <div className="container">
        <motion.div
          className="intro-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="intro-text" variants={itemVariants}>
            <h1 className="intro-title">
              Welcome to the <span className="highlight">Fire Falcons</span>
            </h1>
            <motion.p 
              className="intro-subtitle"
              animate={{ 
                scale: [1, 1.05, 1],
                textShadow: [
                  "0 0 10px rgba(255, 69, 0, 0.5)",
                  "0 0 20px rgba(255, 215, 0, 0.8)",
                  "0 0 10px rgba(255, 69, 0, 0.5)"
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Born to Win
            </motion.p>
            <p className="intro-description">
              Meet our incredible team of thirteen talented cricket players, each bringing their unique 
              skills and expertise to make the Fire Falcons a formidable force in cricket. Our team 
              represents the perfect blend of talent, strategy, and sportsmanship.
            </p>
            
            <motion.div 
              className="intro-buttons"
              variants={itemVariants}
            >
              <motion.button
                className="btn btn-primary"
                onClick={() => document.getElementById('team').scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Meet Our Team
              </motion.button>
              <motion.button
                className="btn btn-outline"
                onClick={() => document.getElementById('owners').scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Meet Our Owners
              </motion.button>
            </motion.div>
          </motion.div>


        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Intro;
