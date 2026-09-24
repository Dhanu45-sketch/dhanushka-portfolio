'use client';

import { ArrowRight, FileDown, Github, Linkedin, MapPin, Smartphone, Code2, Layers, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Hero() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black">
      {/* Background subtle grid & monochrome glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.03] blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl space-y-8">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-xs text-zinc-300 font-mono shadow-sm">
            <span className="w-2 h-2 rounded-full bg-zinc-100 animate-pulse" />
            <span>Level 5 CS Undergraduate • APIIT Sri Lanka / University of Staffordshire</span>
          </div>

          {/* Headline with Avatar */}
          <div className="flex items-center gap-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/avatar.jpg"
              alt="Dhanushka Sachintha"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-zinc-700 object-cover shadow-lg flex-shrink-0"
            />
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                {profile.name}
              </h1>
              <p className="text-2xl sm:text-3xl font-semibold text-chrome font-mono">
                {profile.role}
              </p>
            </div>
          </div>

          {/* Grounded Bio Paragraph */}
          <p className="text-base sm:text-xl text-zinc-300 leading-relaxed max-w-3xl font-normal">
            {profile.heroText}
          </p>

          {/* Pitching Photo — Front Page Feature */}
          <div className="mt-4 rounded-xl overflow-hidden border border-zinc-800 shadow-2xl max-w-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/pitching.jpg"
              alt="Pitching at Hult Prize"
              className="w-full h-auto object-cover"
            />
            <div className="px-4 py-2.5 bg-zinc-950 border-t border-zinc-800">
              <p className="text-xs font-mono text-zinc-400">Pitching at Hult Prize Nationals — Top 15 Finalist</p>
            </div>
          </div>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {['Flutter', 'Dart', 'Kotlin', 'Android SDK', 'Firebase', 'Java', 'Python', 'AWS'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono font-medium rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-zinc-600 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="#fixigo"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg bg-zinc-100 text-black hover:bg-white transition-all duration-200 shadow-md active:scale-95 border border-white"
            >
              <span>View Flagship Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200 hover:bg-zinc-800 hover:text-white hover:border-zinc-500 transition-all duration-200 shadow-sm"
            >
              <FileDown className="w-4 h-4 text-zinc-400" />
              <span>Download CV</span>
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 ml-auto sm:ml-0 pt-2 sm:pt-0 border-t sm:border-t-0 sm:border-l border-zinc-800 sm:pl-4">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg border border-zinc-800 transition-colors"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg border border-zinc-800 transition-colors"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Metrics / Focus Cards Grid (Replacing AI code box) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-zinc-900">
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Smartphone className="w-4 h-4 text-white" />
                <span>Primary Focus</span>
              </div>
              <div className="text-sm font-semibold text-white">Mobile Architecture</div>
              <div className="text-xs text-zinc-500">Flutter & Kotlin Android</div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Layers className="w-4 h-4 text-white" />
                <span>Backend & Cloud</span>
              </div>
              <div className="text-sm font-semibold text-white">Firebase & SQL</div>
              <div className="text-xs text-zinc-500">NoSQL & Relational DBs</div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/80 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Award className="w-4 h-4 text-white" />
                <span>Achievements</span>
              </div>
              <div className="text-sm font-semibold text-white">Hackathon Finalist</div>
              <div className="text-xs text-zinc-500">Hult Prize & Codeverse &apos;25</div>
            </div>
          </div>

          {/* Location indicator */}
          <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono pt-2">
            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
            <span>Based in Kandy, Sri Lanka</span>
          </div>

        </div>
      </div>
    </section>
  );
}
