import React from 'react';
import { motion } from 'framer-motion';
import { teamStats } from '../../data/teamData';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer-background">
        <div className="footer-pattern"></div>
      </div>
      
      <div className="container">
        <motion.div
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="footer-main" variants={itemVariants}>
            <div className="footer-section">
              <h3>Fire Falcons</h3>
              <p>
                A passionate cricket team dedicated to excellence, sportsmanship, 
                and the beautiful game of cricket. Join us on our journey to sporting greatness.
              </p>
              <div className="team-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">🏆</span>
                  <span>Champions League Winners</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">⚡</span>
                  <span>Fastest Growing Team</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🎯</span>
                  <span>Excellence in Every Match</span>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h4>Quick Stats</h4>
              <div className="quick-stats">
                <div className="quick-stat">
                  <span className="stat-value">{teamStats.established}</span>
                  <span className="stat-label">Established</span>
                </div>
                <div className="quick-stat">
                  <span className="stat-value">7</span>
                  <span className="stat-label">Team Members</span>
                </div>
                <div className="quick-stat">
                  <span className="stat-value">{teamStats.winPercentage}%</span>
                  <span className="stat-label">Win Rate</span>
                </div>
                <div className="quick-stat">
                  <span className="stat-value">{teamStats.homeGround}</span>
                  <span className="stat-label">Home Ground</span>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h4>Connect With Us</h4>
              <div className="social-links">
                <motion.a
                  href="#"
                  className="social-link"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Follow us on Twitter"
                >
                  🐦 Twitter
                </motion.a>
                <motion.a
                  href="#"
                  className="social-link"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Follow us on Instagram"
                >
                  📸 Instagram
                </motion.a>
                <motion.a
                  href="#"
                  className="social-link"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Like us on Facebook"
                >
                  📘 Facebook
                </motion.a>
                <motion.a
                  href="#"
                  className="social-link"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Subscribe to our YouTube channel"
                >
                  📺 YouTube
                </motion.a>
              </div>
              
              <div className="contact-info">
                <h5>Get In Touch</h5>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>contact@firefalcons.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Fire Stadium, Cricket City</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="footer-bottom" variants={itemVariants}>
            <div className="footer-divider"></div>
            <div className="footer-bottom-content">
              <p className="copyright">
                © {currentYear} Fire Falcons — Team Introduction. 
                Built with passion for cricket and excellence in web development.
              </p>
              <div className="footer-links">
                <motion.button
                  className="footer-link"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back to Top ↑
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating Fire Effect */}
      <div className="fire-particles">
        <motion.div
          className="fire-particle"
          animate={{
            y: [-20, -100],
            opacity: [1, 0],
            scale: [1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0
          }}
        />
        <motion.div
          className="fire-particle"
          animate={{
            y: [-20, -100],
            opacity: [1, 0],
            scale: [1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1
          }}
        />
        <motion.div
          className="fire-particle"
          animate={{
            y: [-20, -100],
            opacity: [1, 0],
            scale: [1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 2
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
