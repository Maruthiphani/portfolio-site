import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-md bg-gradient-to-br from-emerald-400 to-teal-500 grid place-items-center text-zinc-950 font-bold text-xs">
              M
            </span>
            <span className="font-mono text-xs text-zinc-500">
              maruthi<span className="text-emerald-500">.</span>dev · © {currentYear}
            </span>
          </div>
          <p className="font-mono text-[11px] text-zinc-600">
            built with react · tailwind · framer motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
