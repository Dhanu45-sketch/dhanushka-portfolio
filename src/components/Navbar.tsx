'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, FileDown, Github, Linkedin } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Fixigo Showcase', href: '#fixigo' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-zinc-800 shadow-xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Chrome Monogram Logo */}
          <Link
            href="#"
            className="flex items-center gap-2.5 group font-mono text-lg font-bold tracking-tight text-white"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-700 text-white shadow-sm group-hover:border-zinc-400 group-hover:bg-zinc-800 transition-all">
              DS
            </span>
            <span className="hidden sm:inline-block text-sm font-sans font-medium text-zinc-300 group-hover:text-white transition-colors">
              Dhanushka <span className="text-white font-semibold">Sachintha</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs lg:text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-900/80 rounded-md transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action & Links */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-md transition-colors"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            
            <a
              href={PORTFOLIO_DATA.profile.cvPath}
              download
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-black bg-zinc-100 hover:bg-white rounded-md shadow-sm transition-all duration-200 active:scale-95 border border-white"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={PORTFOLIO_DATA.profile.cvPath}
              download
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-black bg-white rounded-md"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-md transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-zinc-800 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-zinc-800 flex items-center justify-between px-3">
            <span className="text-xs text-zinc-500 font-mono">Dhanushka Sachintha</span>
            <a
              href={PORTFOLIO_DATA.profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white font-medium hover:underline"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
