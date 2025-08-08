import React from 'react';
import { motion } from 'framer-motion';
import { teamOwners } from '../../data/teamData';
import './OwnersSection.css';

const OwnersSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3
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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="owners" className="owners-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Meet Our Owners</h2>
          <p>The visionary leaders behind Fire Falcons</p>
        </motion.div>

        <motion.div
          className="owners-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamOwners.map((owner) => (
            <motion.div
              key={owner.id}
              className="owner-card"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="owner-image-container">
                <img
                  src={owner.image}
                  alt={owner.name}
                  className="owner-image"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <span className="owner-role">{owner.role}</span>
                  </div>
                </div>
              </div>
              <div className="owner-info">
                <h3 className="owner-name">{owner.name}</h3>
                <p className="owner-description">{owner.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OwnersSection;
