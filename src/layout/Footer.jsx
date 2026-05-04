import React from 'react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  
  const socials = [
    { 
      name: "Github", 
      href: "https://github.com/hmtsc-chandrasiri", 
      svg: <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> 
    },
    { 
      name: "Linkedin", 
      href: "https://linkedin.com/in/hmtsc-chandrasiri", 
      svg: <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> 
    },
    { 
      name: "Twitter", 
      href: "#", 
      svg: <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg> 
    },
  ];

  return (
    <footer className="py-12 border-t border-white/10 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">
              H.M.T.S.<span className="text-blue-500">.</span>
            </h2>
            <p className="text-slate-500 text-sm">
              © {currentYear} H.M.T.S. Chandrasiri. All rights reserved.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all"
              >
                {social.svg}
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};