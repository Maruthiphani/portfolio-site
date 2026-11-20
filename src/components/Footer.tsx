import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-md bg-gradient-to-br from-taupe-600 to-taupe-800 grid place-items-center text-white font-bold text-xs">
              M
            </span>
            <span className="font-mono text-xs text-stone-500">
              maruthi<span className="text-taupe-700">.</span>dev · © {currentYear}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/maruthiphanindra/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 grid place-items-center rounded-md border border-stone-200 bg-white/70 text-stone-600 hover:text-charcoal hover:border-taupe-500/40 hover:bg-taupe-500/5 transition-colors duration-200 focus-ring"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/Maruthiphani"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 grid place-items-center rounded-md border border-stone-200 bg-white/70 text-stone-600 hover:text-charcoal hover:border-taupe-500/40 hover:bg-taupe-500/5 transition-colors duration-200 focus-ring"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <p className="font-mono text-[11px] text-stone-400 ml-1">
              built with react · tailwind · framer motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
