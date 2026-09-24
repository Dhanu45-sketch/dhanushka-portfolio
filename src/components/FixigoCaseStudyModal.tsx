'use client';

import { X, Github, ExternalLink, UserCheck, CheckCircle2, Layers, Cpu, Compass } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function FixigoCaseStudyModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  const { fixigoProject } = PORTFOLIO_DATA;
  const { caseStudy } = fixigoProject;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-700 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-black sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded text-xs font-mono font-semibold bg-zinc-900 text-white border border-zinc-700">
              Technical Case Study
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {fixigoProject.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-10 overflow-y-auto font-sans">
          
          {/* Summary Header */}
          <div className="space-y-4 p-6 rounded-xl bg-black border border-zinc-800">
            <p className="text-base text-zinc-300 leading-relaxed font-normal">
              {fixigoProject.description}
            </p>
            
            <div className="flex flex-wrap gap-2 pt-2">
              {fixigoProject.technologies.map((tech) => (
                <span key={tech} className="px-2.5 py-1 text-xs font-mono rounded bg-zinc-900 border border-zinc-800 text-zinc-200">
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={fixigoProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-xs font-semibold text-white hover:bg-zinc-800 transition-colors"
              >
                <Github className="w-4 h-4 text-white" />
                <span>View GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
              <span className="text-xs text-zinc-400 font-mono">
                Status: {fixigoProject.version}
              </span>
            </div>
          </div>

          {/* 01 — Overview */}
          <section className="space-y-3">
            <div className="text-zinc-400 text-xs font-mono font-semibold uppercase">
              01 — Overview
            </div>
            <h3 className="text-lg font-bold text-white">Market Context & Purpose</h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {caseStudy.overview}
            </p>
          </section>

          {/* 02 — Problem */}
          <section className="space-y-3">
            <div className="text-zinc-400 text-xs font-mono font-semibold uppercase">
              02 — Problem
            </div>
            <h3 className="text-lg font-bold text-white">Key Challenges in the Home Repair Sector</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.problem.map((prob, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-black border border-zinc-800 flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-zinc-400 mt-1.5 flex-shrink-0" />
                  <span className="text-xs text-zinc-300">{prob}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 03 — Solution */}
          <section className="space-y-3">
            <div className="text-zinc-400 text-xs font-mono font-semibold uppercase">
              03 — Solution
            </div>
            <h3 className="text-lg font-bold text-white">Dual-Sided Mobile Marketplace Architecture</h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {caseStudy.solution}
            </p>
          </section>

          {/* 04 — My Contribution */}
          <section className="space-y-3 p-5 rounded-xl bg-black border border-zinc-700">
            <div className="flex items-center gap-2 text-zinc-200 text-xs font-mono font-semibold uppercase">
              <UserCheck className="w-4 h-4" />
              <span>04 — My Individual Contribution</span>
            </div>
            <h3 className="text-base font-bold text-white">Transparent Role & Responsibilities</h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {caseStudy.myContribution}
            </p>
          </section>

          {/* 05 — Technical Architecture */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono font-semibold uppercase">
              <Layers className="w-4 h-4" />
              <span>05 — Technical Architecture</span>
            </div>
            <h3 className="text-lg font-bold text-white">System Component Flow</h3>
            <div className="p-5 rounded-xl bg-black border border-zinc-800 font-mono text-xs text-zinc-300 space-y-2 overflow-x-auto">
              {caseStudy.technicalArchitecture.map((line, idx) => (
                <div key={idx} className={idx === 0 ? "text-white font-bold pb-1" : "text-zinc-300 pl-2"}>
                  {line}
                </div>
              ))}
            </div>
          </section>

          {/* 06 — Engineering Considerations */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono font-semibold uppercase">
              <Cpu className="w-4 h-4" />
              <span>06 — Engineering Considerations</span>
            </div>
            <h3 className="text-lg font-bold text-white">Design Decisions & Security Rules</h3>
            <div className="space-y-2.5">
              {caseStudy.engineeringConsiderations.map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-black border border-zinc-800 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-zinc-300 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 07 — Results & Learnings */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono font-semibold uppercase">
              <Compass className="w-4 h-4" />
              <span>07 — Results & Technical Learnings</span>
            </div>
            <h3 className="text-lg font-bold text-white">Engineering Takeaways</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {caseStudy.learnings.map((learning, idx) => (
                <li key={idx} className="p-3 rounded-lg bg-black border border-zinc-800 text-xs text-zinc-300 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 flex-shrink-0" />
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </section>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-zinc-800 bg-black flex items-center justify-between sticky bottom-0 z-20">
          <span className="text-xs font-mono text-zinc-500">
            Fixigo App Case Study • Dhanushka Sachintha
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
