import React from 'react';
import Section from './Section';

const Hero: React.FC = () => {
  return (
    <Section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center relative z-10">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 backdrop-blur-sm text-neon-cyan text-xs font-semibold uppercase tracking-widest animate-float">
          Future Ready Engineer
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-6 leading-tight">
          Labala <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan animate-pulse">Sahithya</span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
          Enthusiastic <strong className="text-neon-purple">Computer Science</strong> student at SRM University AP.
          Passionate about <strong className="text-neon-cyan">Machine Learning</strong> and <strong className="text-neon-blue">Front-End Development</strong>, solving customer-centric problems, and delivering impactful solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects" 
            className="px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black font-semibold hover:scale-105 transition-transform duration-200"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 rounded-full border border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/10 transition-all font-semibold"
          >
            Contact Me
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Hero;