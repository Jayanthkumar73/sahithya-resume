import React from 'react';
import Section from './Section';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="py-20">
      <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 p-10 md:p-20 text-center">
        {/* Background decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-neon-purple opacity-20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-slate-500 dark:text-slate-300 mb-12">
            Ready to build something amazing? Reach out and let's discuss how I can contribute to your team.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <ContactLink
              href="https://wa.me/917981917715"
              icon={<WhatsAppIcon className="w-6 h-6" />}
              label="WhatsApp"
              color="hover:bg-green-600 hover:border-green-600"
            />
            <ContactLink
              href="tel:+917981917715"
              icon={<PhoneIcon className="w-6 h-6" />}
              label="+91 7981917715"
              color="hover:bg-blue-600 hover:border-blue-600"
            />
            <ContactLink
              href="https://www.linkedin.com/in/sahithya-labala-550a71349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              icon={<LinkedinIcon className="w-6 h-6" />}
              label="LinkedIn"
              color="hover:bg-[#0077b5] hover:border-[#0077b5]"
            />
            <ContactLink
              href="mailto:sahithya_labala@srmap.edu.in"
              icon={<MailIcon className="w-6 h-6" />}
              label="Email"
              color="hover:bg-red-500 hover:border-red-500"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

interface ContactLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  color: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({ href, icon, label, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center gap-3 px-6 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-black/40 backdrop-blur-md transition-all duration-300 hover:text-white hover:-translate-y-1 ${color}`}
  >
    {icon}
    <span className="font-semibold">{label}</span>
  </a>
);

// Custom Icons for specificity
const WhatsAppIcon = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

const PhoneIcon = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.12 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);

const LinkedinIcon = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const MailIcon = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
);

export default Contact;