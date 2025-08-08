import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { teamStats } from '../../data/teamData';
import './DynamicSection.css';

const DynamicSection = () => {
  const [activeAnimation, setActiveAnimation] = useState('batting');
  const ballControls = useAnimation();
  const batControls = useAnimation();
  const stumpsControls = useAnimation();

  useEffect(() => {
    const animationCycle = async () => {
      // Batting animation
      setActiveAnimation('batting');
      await batControls.start({
        rotate: [0, -45, 0],
        transition: { duration: 1.5, ease: "easeInOut" }
      });
      
      // Bowling animation
      setActiveAnimation('bowling');
      await ballControls.start({
        x: [0, 300, 600],
        y: [0, -50, 0],
        rotate: [0, 720, 1440],
        transition: { duration: 2, ease: "easeInOut" }
      });
      
      // Reset ball position
      ballControls.set({ x: 0, y: 0, rotate: 0 });
      
      // Wicket animation
      setActiveAnimation('wicket');
      await stumpsControls.start({
        rotate: [0, 15, -15, 0],
        scale: [1, 1.1, 1],
        transition: { duration: 1, ease: "easeInOut" }
      });
      
      // Wait before next cycle
      await new Promise(resolve => setTimeout(resolve, 2000));
    };

    const interval = setInterval(animationCycle, 6000);
    animationCycle(); // Start immediately

    return () => clearInterval(interval);
  }, [ballControls, batControls, stumpsControls]);

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
    <section id="stats" className="dynamic-section">
      <div className="container">
        <motion.div
          className="section-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="dynamic-header" variants={itemVariants}>
            <h2>Cricket in Motion</h2>
            <p>Experience the excitement of cricket through interactive animations</p>
          </motion.div>

          <div className="dynamic-content">
            <motion.div className="cricket-scene" variants={itemVariants}>
              <div className="field-background">
                <div className="pitch"></div>
                <div className="boundary-rope"></div>
              </div>
              
              {/* Cricket Elements */}
              <motion.div
                className="cricket-bat"
                animate={batControls}
                initial={{ rotate: 0 }}
              >
                🏏
              </motion.div>
              
              <motion.div
                className="cricket-ball"
                animate={ballControls}
                initial={{ x: 0, y: 0, rotate: 0 }}
              >
                🔴
              </motion.div>
              
              <motion.div
                className="wickets"
                animate={stumpsControls}
                initial={{ rotate: 0, scale: 1 }}
              >
                <div className="stump"></div>
                <div className="stump"></div>
                <div className="stump"></div>
                <div className="bails">
                  <div className="bail"></div>
                  <div className="bail"></div>
                </div>
              </motion.div>
              
              {/* Animation Status */}
              <div className="animation-status">
                <div className={`status-item ${activeAnimation === 'batting' ? 'active' : ''}`}>
                  Batting
                </div>
                <div className={`status-item ${activeAnimation === 'bowling' ? 'active' : ''}`}>
                  Bowling
                </div>
                <div className={`status-item ${activeAnimation === 'wicket' ? 'active' : ''}`}>
                  Wicket
                </div>
              </div>
            </motion.div>

            <motion.div className="team-achievements" variants={itemVariants}>
              <h3>Team Achievements</h3>
              
              <div className="achievements-grid">
                <motion.div 
                  className="achievement-card"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="achievement-icon">🏆</div>
                  <div className="achievement-text">
                    <h4>Championship Winners</h4>
                    <p>Regional Cricket League 2023</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="achievement-card"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="achievement-icon">⚡</div>
                  <div className="achievement-text">
                    <h4>Best Team Spirit</h4>
                    <p>Inter-Club Tournament 2023</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="achievement-card"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="achievement-icon">🎯</div>
                  <div className="achievement-text">
                    <h4>Highest Run Rate</h4>
                    <p>Season Average: 8.5 RPO</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="achievement-card"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="achievement-icon">🛡️</div>
                  <div className="achievement-text">
                    <h4>Best Bowling Attack</h4>
                    <p>Lowest Economy Rate: 5.2</p>
                  </div>
                </motion.div>
              </div>
              
              <div className="team-stats-summary">
                <h4>Season Statistics</h4>
                <div className="stats-row">
                  <div className="stat-group">
                    <span className="stat-number">{teamStats.wins}</span>
                    <span className="stat-label">Wins</span>
                  </div>
                  <div className="stat-group">
                    <span className="stat-number">{teamStats.losses}</span>
                    <span className="stat-label">Losses</span>
                  </div>
                  <div className="stat-group">
                    <span className="stat-number">{teamStats.ties}</span>
                    <span className="stat-label">Ties</span>
                  </div>
                  <div className="stat-group">
                    <span className="stat-number">{teamStats.winPercentage}%</span>
                    <span className="stat-label">Win Rate</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DynamicSection;
