import React from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Achievements from './components/Achievements';
import Coursework from './components/Coursework';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {
  const { isDark, toggleDark } = useDarkMode();

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header isDark={isDark} toggleDark={toggleDark} />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Resume />
        <Achievements />
        <Coursework />
        <Contact />
        <Experience />
      <Footer />
      </div>
    </div>
  );
}

export default App;