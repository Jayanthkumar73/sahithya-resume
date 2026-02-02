import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-neon-cyan selection:text-black">
      <Background />
      
      <div className="relative z-10">
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <footer className="py-8 text-center text-sm text-slate-500 dark:text-slate-400 glass-panel border-t border-t-white/10 mt-12">
          <p>© {new Date().getFullYear()} Labala Sahithya. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;