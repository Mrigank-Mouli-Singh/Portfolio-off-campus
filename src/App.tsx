import React from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';   // Moved up
import Projects from './components/Projects';       // Moved up
import Education from './components/Education';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Achievements from './components/Achievements';
import Coursework from './components/Coursework';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { isDark, toggleDark } = useDarkMode();

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header isDark={isDark} toggleDark={toggleDark} />
        <Hero />
        <About />
        <Experience />  {/* relocated here */}
        <Projects />    {/* relocated here */}
        <Education />
        <Skills />
        <Resume />
        <Achievements />
        <Coursework />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
