import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

interface NavbarProps {
  onDownloadPDF: () => void;
}

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Education', href: '#degrees' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC<NavbarProps> = ({ onDownloadPDF }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <div
        className={`w-full max-w-5xl transition-all duration-300 rounded-full border border-zinc-800/80 ${
          isScrolled ? 'bg-zinc-950/80 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)]' : 'bg-zinc-900/40 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center justify-between h-12 px-4 sm:px-5">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="h-7 w-7 rounded-md bg-gradient-to-br from-emerald-400 to-teal-500 grid place-items-center text-zinc-950 font-bold text-sm shadow-md shadow-emerald-500/20">
              M
            </span>
            <span className="hidden sm:inline font-mono text-xs text-zinc-300 group-hover:text-white transition-colors">
              maruthi<span className="text-emerald-400">.</span>dev
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="px-3 py-1.5 rounded-full text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/70 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <button
            onClick={onDownloadPDF}
            className="hidden md:flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-zinc-950 bg-emerald-400 rounded-full hover:bg-emerald-300 transition-colors shadow-md shadow-emerald-500/20"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-zinc-300 hover:text-white hover:bg-zinc-800/60"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-zinc-800/80 rounded-b-3xl bg-zinc-950/95 backdrop-blur-xl">
            <div className="px-3 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-lg text-sm text-zinc-300 hover:bg-zinc-800/60 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  onDownloadPDF();
                  setIsOpen(false);
                }}
                className="flex w-full items-center gap-2 px-3 py-2 text-sm font-medium text-zinc-950 bg-emerald-400 rounded-lg hover:bg-emerald-300"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
