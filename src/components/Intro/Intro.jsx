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
            <p className="intro-subtitle">
              Where Cricket Meets Passion, Excellence, and Team Spirit
            </p>
            <p className="intro-description">
              Meet our incredible team of seven talented cricket players, each bringing their unique 
              skills and expertise to make the Fire Falcons a formidable force in cricket. From 
              aggressive opening batsmen to crafty spin bowlers, our team represents the perfect 
              blend of talent, strategy, and sportsmanship.
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
                onClick={() => document.getElementById('stats').scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Statistics
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="intro-stats"
            variants={itemVariants}
          >
            <div className="stats-grid">
              <motion.div 
                className="stat-card"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stat-number">{teamStats.totalMatches}</div>
                <div className="stat-label">Total Matches</div>
              </motion.div>
              
              <motion.div 
                className="stat-card"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stat-number">{teamStats.wins}</div>
                <div className="stat-label">Victories</div>
              </motion.div>
              
              <motion.div 
                className="stat-card"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stat-number">{teamStats.winPercentage}%</div>
                <div className="stat-label">Win Rate</div>
              </motion.div>
              
              <motion.div 
                className="stat-card"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stat-number">{teamStats.established}</div>
                <div className="stat-label">Established</div>
              </motion.div>
            </div>
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
