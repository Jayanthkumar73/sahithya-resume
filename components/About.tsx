import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Bio & Image */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="relative group shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-2 border-white/10">
                {/* 
                     NOTE: In a production environment, place the provided user photo in the public folder 
                     and reference it here (e.g., src="/sahithya.jpg"). 
                     Using a placeholder for the demo.
                 */}
                <img
                  src="Snapchat-1942839213~2.jpg.jpeg"
                  alt="Labala Sahithya"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-display font-bold">About Me</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                I am an enthusiastic and driven Computer Science and Engineering student at SRM University Andhra Pradesh.
                My primary focus is on Machine Learning and Front-End Development. I am passionate about solving customer-centric problems,
                collaborating in diverse teams, and continuously learning emerging technologies to deliver impactful solutions.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Machine Learning', 'Front-End', 'Full Stack', 'Problem Solving'].map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-semibold rounded-md bg-neon-purple/10 text-neon-purple border border-neon-purple/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Active Participations Section (Replaced Work Experience) */}
          <div className="glass-panel p-6 rounded-2xl mt-8 border-l-4 border-l-neon-blue">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <UsersIcon className="w-5 h-5 text-neon-blue" />
              Active Participations
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-semibold text-lg text-slate-900 dark:text-white">Dance Club SRMAP</h4>
                  <span className="text-sm font-mono text-slate-500">Active Member</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-semibold text-lg text-slate-900 dark:text-white">University Events</h4>
                  <span className="text-sm font-mono text-slate-500">Management Team</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                  Member of the management team for several key events at SRM University AP.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Education */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
            <GraduationCapIcon className="w-6 h-6 text-neon-cyan" />
            Education
          </h3>

          <div className="space-y-4">
            <div className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors group">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-lg group-hover:text-neon-cyan transition-colors">B.Tech in CSE</h4>
                <span className="text-xs font-mono bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded">2022 - Present</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 mb-2">SRM University, AP</p>
              <div className="flex items-center gap-2 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Specialization in AI/ML & Front-End
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors group">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-lg group-hover:text-neon-cyan transition-colors">Intermediate</h4>
                <span className="text-xs font-mono bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded">2021</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 mb-2">Sri Chaitanya Junior College</p>
            </div>

            <div className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors group">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-lg group-hover:text-neon-cyan transition-colors">High School</h4>
                <span className="text-xs font-mono bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded">2020</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 mb-2">Sri Chaitanya</p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-neon-cyan/20 bg-neon-cyan/5">
              <h4 className="font-bold text-sm uppercase tracking-wider mb-3 text-neon-cyan">Certifications</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-neon-cyan"></span>
                  <span>MongoDB Node.js Certified Associate Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const GraduationCapIcon = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 0 6-1 6-1v-4c-6 0-6-1-6-1z" /></svg>
);

const UsersIcon = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);

export default About;