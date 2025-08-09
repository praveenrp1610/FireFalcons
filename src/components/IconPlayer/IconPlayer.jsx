import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { iconPlayer } from '../../data/teamData';
import './IconPlayer.css';

const IconPlayer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="icon-player" className="icon-player-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Icon Player</h2>
          <p>Meet our star performer who leads by example</p>
        </motion.div>

        <motion.div
          className="icon-player-container"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="icon-player-card">
            <motion.div
              className="player-image-wrapper"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="image-container">
                <img
                  src={iconPlayer.image}
                  alt={iconPlayer.name}
                  className="player-image"
                  onError={(e) => {
                    console.error(`Failed to load image for ${iconPlayer.name}:`, iconPlayer.image);
                    e.target.style.display = 'none';
                    // Show fallback text
                    const fallback = document.createElement('div');
                    fallback.className = 'image-fallback';
                    fallback.textContent = iconPlayer.name;
                    e.target.parentNode.appendChild(fallback);
                  }}
                />
                <div className="image-overlay">
                  <motion.button
                    className="view-stats-btn"
                    onClick={() => setIsModalOpen(true)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Stats
                  </motion.button>
                </div>
              </div>
              <div className="crown-icon">👑</div>
            </motion.div>
            
            <div className="player-details">
              <div className="player-header">
                <h3 className="player-name">{iconPlayer.name}</h3>
                <span className="player-role">{iconPlayer.role}</span>
              </div>
              <p className="player-description">{iconPlayer.description}</p>
              
              <div className="highlight-stats">
                <div className="stat-box">
                  <div className="stat-icon">⚡</div>
                  <div className="stat-content">
                    <span className="stat-label">Bowling Speed</span>
                    <span className="stat-value">Express</span>
                  </div>
                </div>
                <div className="stat-box">
                  <div className="stat-icon">🏏</div>
                  <div className="stat-content">
                    <span className="stat-label">Specialty</span>
                    <span className="stat-value">Six Hitter</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
              >
                ×
              </button>
              
              <div className="modal-body">
                <div className="modal-image">
                  <img
                    src={iconPlayer.image}
                    alt={iconPlayer.name}
                  />
                  <div className="crown-badge">👑 Icon Player</div>
                </div>
                
                <div className="modal-info">
                  <h3>{iconPlayer.name}</h3>
                  <p className="modal-role">{iconPlayer.role}</p>
                  <p className="modal-description">{iconPlayer.description}</p>
                  
                  <div className="player-stats">
                    <h4>Performance Highlights</h4>
                    <div className="stats-grid">
                      <div className="stat-item">
                        <span className="stat-label">Matches:</span>
                        <span className="stat-value">{iconPlayer.stats.matches}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Runs:</span>
                        <span className="stat-value">{iconPlayer.stats.runs}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Wickets:</span>
                        <span className="stat-value">{iconPlayer.stats.wickets}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Sixes:</span>
                        <span className="stat-value">{iconPlayer.stats.sixes}</span>
                      </div>
                      <div className="stat-item special">
                        <span className="stat-label">Bowling Speed:</span>
                        <span className="stat-value">{iconPlayer.stats.bowlingSpeed}</span>
                      </div>
                    </div>
                    
                    <div className="specialties">
                      <h5>Special Abilities</h5>
                      <div className="specialty-tags">
                        <span className="tag">Power Hitter</span>
                        <span className="tag">Express Bowler</span>
                        <span className="tag">All-rounder</span>
                        <span className="tag">Match Winner</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default IconPlayer;
