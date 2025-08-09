import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import IconPlayer from './components/IconPlayer/IconPlayer';
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
      <main>
        <Intro />
        <IconPlayer />
        <TeamSection />
        <OwnersSection />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;
