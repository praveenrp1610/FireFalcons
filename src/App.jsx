import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header/Header';
import NewsFlash from './components/NewsFlash/NewsFlash';
import Intro from './components/Intro/Intro';
import TeamSection from './components/TeamSection/TeamSection';
import OwnersSection from './components/OwnersSection/OwnersSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <motion.div 
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Header />
      <NewsFlash />
      <main>
        <Intro />
        <TeamSection />
        <OwnersSection />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;
