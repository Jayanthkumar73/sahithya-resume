import React from 'react';
import Section from './Section';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "IT Asset Management System",
      tech: "React, Node.js, Express, MongoDB",
      description: "A full-stack system designed to manage IT assets throughout their lifecycle. Includes real-time monitoring, maintenance scheduling, vendor tracking, and analytics dashboards.",
      features: [
        "Secured with role-based authentication",
        "Integrated reporting features",
        "Real-time monitoring and analytics"
      ],
      link: "https://github.com/Jayanthkumar73/Asset-Management"
    },
    {
      title: "Student Portal Dashboard",
      tech: "React.js, JSON Server",
      description: "A comprehensive student portal allowing users to view academic profiles, weekly class schedules, and exam results in one centralized location.",
      features: [
        "Local Storage for data persistence",
        "Attendance request management",
        "Real-time updates for better usability"
      ],
      link: "https://github.com/Jayanthkumar73/student-portal"
    },
    {
      title: "Prompt Perfect",
      tech: "Python, Gemini 2.5 Flash, Streamlit",
      description: "A prompt-engineering tool that enhances raw user queries into context-aware prompts using Gemini 2.5 Flash, improving LLM output accuracy.",
      features: [
        "Context-aware prompt enhancement",
        "Real-time model selection",
        "Simple and effective Streamlit UI"
      ],
      link: "https://promptperfect-ebhpfvcvtpha2efrpfy2nz.streamlit.app/"
    }
  ];

  return (
    <Section id="projects" className="py-20">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-2">Featured Projects</h2>
          <p className="text-slate-500 dark:text-slate-400">Innovation through code</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="glass-panel rounded-3xl p-8 border border-white/5 hover:border-neon-cyan/30 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(0,243,255,0.15)] group relative overflow-hidden"
          >
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <h3 className="text-2xl font-bold font-display text-white">{project.title}</h3>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-neon-cyan">
                  {project.tech}
                </span>
              </div>

              <p className="text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-3 mb-8">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircleIcon className="w-5 h-5 text-neon-purple shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-neon-cyan transition-colors"
              >
                View Details <ArrowUpRightIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const CheckCircleIcon = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
);

const ArrowUpRightIcon = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
);

export default Projects;