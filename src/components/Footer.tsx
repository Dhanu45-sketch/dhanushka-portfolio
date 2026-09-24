'use client';

import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-900 bg-black py-12 text-zinc-400 font-sans text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left info */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-mono font-bold text-sm">
              <span className="text-zinc-400">DS</span>
              <span>Dhanushka Sachintha</span>
            </div>
            <p className="text-zinc-400 text-xs">
              Computer Science Undergraduate • Software & Mobile Developer
            </p>
            <p className="text-zinc-500 text-[11px]">
              University of Staffordshire • APIIT Sri Lanka
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all ml-2"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-zinc-400" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} Dhanushka Sachintha. All rights reserved.
          </div>
          <div>
            Built with Next.js, TypeScript & Tailwind CSS
          </div>
        </div>

      </div>
    </footer>
  );
}
