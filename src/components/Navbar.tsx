import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

interface NavbarProps {
  onDownloadPDF: () => void;
}

const navLinks = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Education', href: '#degrees', id: 'degrees' },
  { name: 'Certifications', href: '#certifications', id: 'certifications' },
  { name: 'Achievements', href: '#achievements', id: 'achievements' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

const Navbar: React.FC<NavbarProps> = ({ onDownloadPDF }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('hero');

  useEffect(() => {
    const ids = ['hero', ...navLinks.map((l) => l.id)];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-stone-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group focus-ring rounded-md">
            <span className="h-7 w-7 rounded-full border border-stone-300 grid place-items-center text-stone-800 font-serif text-base leading-none">
              M
            </span>
            <span className="hidden sm:inline font-mono text-xs text-stone-600 group-hover:text-charcoal transition-colors duration-200">
              maruthi<span className="text-taupe-700">.</span>dev
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:block" aria-label="Primary">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeId === link.id;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={`relative px-3 py-2 rounded-md text-sm transition-colors duration-200 focus-ring ${
                        isActive ? 'text-charcoal' : 'text-stone-600 hover:text-charcoal'
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute inset-x-3 -bottom-0.5 h-px bg-taupe-600 transition-opacity duration-200 ${
                          isActive ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CTA */}
          <button
            onClick={onDownloadPDF}
            className="hidden md:flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium bg-taupe-600 text-white rounded-md hover:bg-taupe-600 transition-colors duration-200 shadow-sm shadow-taupe-600/20 focus-ring"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-stone-700 hover:text-charcoal hover:bg-stone-200/60 focus-ring"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-stone-200 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            <div className="py-3 space-y-1">
              {navLinks.map((link) => {
                const isActive = activeId === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`block px-3 py-2 rounded-md text-sm transition-colors duration-200 focus-ring ${
                      isActive
                        ? 'text-charcoal bg-white/70 border-l-2 border-taupe-600 pl-[10px]'
                        : 'text-stone-700 hover:bg-stone-200/60 hover:text-charcoal'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                );
              })}
              <button
                onClick={() => {
                  onDownloadPDF();
                  setIsOpen(false);
                }}
                className="flex w-full items-center gap-2 px-3 py-2 mt-2 text-sm font-medium bg-taupe-600 text-white rounded-md hover:bg-taupe-600 transition-colors duration-200 focus-ring"
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
