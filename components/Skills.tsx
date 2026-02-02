import React from 'react';
import Section from './Section';

const Skills: React.FC = () => {
  const skills = [
    { category: 'Programming', items: ['CPP', 'PHP', 'SQL', 'JavaScript (ES6+)'], color: 'text-blue-400' },
    { category: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'Streamlit'], color: 'text-neon-cyan' },
    { category: 'Backend & DB', items: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'PostgreSQL'], color: 'text-green-400' },
    { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'phpMyAdmin'], color: 'text-purple-400' },
  ];

  return (
    <Section id="skills" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Technical Arsenal</h2>
        <p className="text-slate-500 dark:text-slate-400">Tools and technologies I use to bring ideas to life</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skillGroup, idx) => (
          <div 
            key={idx} 
            className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group"
          >
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${skillGroup.color.replace('text-', '')} to-transparent opacity-50`}></div>
            <h3 className="text-xl font-bold mb-6 tracking-wide uppercase text-slate-800 dark:text-white">{skillGroup.category}</h3>
            <ul className="space-y-3">
              {skillGroup.items.map((item) => (
                <li key={item} className="flex items-center space-x-3">
                  <span className={`w-1.5 h-1.5 rounded-full bg-current ${skillGroup.color}`}></span>
                  <span className="text-slate-600 dark:text-slate-300 font-medium group-hover:text-white transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;