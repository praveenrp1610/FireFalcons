import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Logo is now in public folder
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        <div className="header-content">
          {/* Logo and Title */}
          <motion.div 
            className="logo-section"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Fire Falcons Logo" className="logo" />
            <h1 className="team-title">Fire Falcons</h1>
          </motion.div>

          {/* Navigation */}
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li>
                <motion.button
                  className="nav-link"
                  onClick={() => scrollToSection('home')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Home
                </motion.button>
              </li>
              <li>
                <motion.button
                  className="nav-link"
                  onClick={() => scrollToSection('team')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Team
                </motion.button>
              </li>
              <li>
                <motion.button
                  className="nav-link"
                  onClick={() => scrollToSection('stats')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Stats
                </motion.button>
              </li>
              <li>
                <motion.button
                  className="nav-link"
                  onClick={() => scrollToSection('contact')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact
                </motion.button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
