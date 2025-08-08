import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { teamMembers } from '../../data/teamData';
import './TeamSection.css';

const TeamSection = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 }
  };

  return (
    <section id="team" className="team-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Meet Our Champions</h2>
          <p>Seven talented players, one unstoppable team</p>
        </motion.div>

        <motion.div
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamMembers.map((player, index) => (
            <motion.div
              key={player.id}
              className="player-card"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedPlayer(player)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div className="player-image-container">
                    <img
                      src={player.image}
                      alt={player.name}
                      className="player-image"
                    />
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <span className="view-details">View Details</span>
                      </div>
                    </div>
                  </div>
                  <div className="player-info">
                    <h3 className="player-name">{player.name}</h3>
                    <p className="player-role">{player.role}</p>
                    <div className="role-badge">
                      <span>#{index + 1}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Player Details Modal */}
      <AnimatePresence>
        {selectedPlayer && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPlayer(null)}
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
                onClick={() => setSelectedPlayer(null)}
                aria-label="Close modal"
              >
                ×
              </button>
              
              <div className="modal-body">
                <div className="modal-image">
                  <img
                    src={selectedPlayer.image}
                    alt={selectedPlayer.name}
                  />
                </div>
                
                <div className="modal-info">
                  <h3>{selectedPlayer.name}</h3>
                  <p className="modal-role">{selectedPlayer.role}</p>
                  <p className="modal-description">{selectedPlayer.description}</p>
                  
                  <div className="player-stats">
                    <h4>Performance Stats</h4>
                    <div className="stats-list">
                      <div className="stat-item">
                        <span className="stat-label">Matches:</span>
                        <span className="stat-value">{selectedPlayer.stats.matches}</span>
                      </div>
                      {selectedPlayer.stats.runs && (
                        <div className="stat-item">
                          <span className="stat-label">Runs:</span>
                          <span className="stat-value">{selectedPlayer.stats.runs}</span>
                        </div>
                      )}
                      {selectedPlayer.stats.wickets && (
                        <div className="stat-item">
                          <span className="stat-label">Wickets:</span>
                          <span className="stat-value">{selectedPlayer.stats.wickets}</span>
                        </div>
                      )}
                      {selectedPlayer.stats.average && (
                        <div className="stat-item">
                          <span className="stat-label">Average:</span>
                          <span className="stat-value">{selectedPlayer.stats.average}</span>
                        </div>
                      )}
                      {selectedPlayer.stats.economy && (
                        <div className="stat-item">
                          <span className="stat-label">Economy:</span>
                          <span className="stat-value">{selectedPlayer.stats.economy}</span>
                        </div>
                      )}
                      {selectedPlayer.stats.catches && (
                        <div className="stat-item">
                          <span className="stat-label">Catches:</span>
                          <span className="stat-value">{selectedPlayer.stats.catches}</span>
                        </div>
                      )}
                      {selectedPlayer.stats.stumpings && (
                        <div className="stat-item">
                          <span className="stat-label">Stumpings:</span>
                          <span className="stat-value">{selectedPlayer.stats.stumpings}</span>
                        </div>
                      )}
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

export default TeamSection;
