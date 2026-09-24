import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, UserCheck, CheckCircle2, Layers, Cpu, Compass } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const metadata = {
  title: 'Fixigo — Technical Case Study | Dhanushka Sachintha',
  description: 'Detailed technical case study for Fixigo, a Sri Lankan handyman marketplace application built with Flutter and Firebase.',
};

export default function FixigoCaseStudyPage() {
  const { fixigoProject } = PORTFOLIO_DATA;
  const { caseStudy } = fixigoProject;

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans antialiased py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Back navigation */}
        <div>
          <Link
            href="/#fixigo"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono font-semibold text-zinc-300 hover:text-white hover:border-zinc-700 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-zinc-400" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* Title Header */}
        <div className="space-y-4 p-8 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-xl">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded text-xs font-mono font-semibold bg-zinc-900 text-white border border-zinc-700">
              Technical Case Study
            </span>
            <span className="text-xs font-mono text-zinc-400">
              Status: {fixigoProject.version}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {fixigoProject.title}
          </h1>

          <p className="text-base text-zinc-300 leading-relaxed">
            {fixigoProject.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {fixigoProject.technologies.map((tech) => (
              <span key={tech} className="px-2.5 py-1 text-xs font-mono rounded bg-black border border-zinc-800 text-zinc-300">
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-2 flex items-center gap-4">
            <a
              href={fixigoProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black border border-zinc-700 text-xs font-semibold text-white hover:bg-zinc-900 transition-colors"
            >
              <Github className="w-4 h-4 text-white" />
              <span>View GitHub Repository</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </div>

        {/* 01 — Overview */}
        <section className="space-y-3 p-6 rounded-xl bg-zinc-950 border border-zinc-800">
          <div className="text-zinc-400 text-xs font-mono font-semibold uppercase">
            01 — Overview
          </div>
          <h2 className="text-xl font-bold text-white">Market Context & Purpose</h2>
          <p className="text-sm text-zinc-300 leading-relaxed">
            {caseStudy.overview}
          </p>
        </section>

        {/* 02 — Problem */}
        <section className="space-y-3 p-6 rounded-xl bg-zinc-950 border border-zinc-800">
          <div className="text-zinc-400 text-xs font-mono font-semibold uppercase">
            02 — Problem
          </div>
          <h2 className="text-xl font-bold text-white">Key Challenges</h2>
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
        <section className="space-y-3 p-6 rounded-xl bg-zinc-950 border border-zinc-800">
          <div className="text-zinc-400 text-xs font-mono font-semibold uppercase">
            03 — Solution
          </div>
          <h2 className="text-xl font-bold text-white">Dual-Sided Marketplace Architecture</h2>
          <p className="text-sm text-zinc-300 leading-relaxed">
            {caseStudy.solution}
          </p>
        </section>

        {/* 04 — My Contribution */}
        <section className="space-y-3 p-6 rounded-xl bg-black border border-zinc-700">
          <div className="flex items-center gap-2 text-zinc-200 text-xs font-mono font-semibold uppercase">
            <UserCheck className="w-4 h-4" />
            <span>04 — My Individual Contribution</span>
          </div>
          <h2 className="text-xl font-bold text-white">Transparent Role & Responsibilities</h2>
          <p className="text-sm text-zinc-300 leading-relaxed">
            {caseStudy.myContribution}
          </p>
        </section>

        {/* 05 — Technical Architecture */}
        <section className="space-y-4 p-6 rounded-xl bg-zinc-950 border border-zinc-800">
          <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono font-semibold uppercase">
            <Layers className="w-4 h-4" />
            <span>05 — Technical Architecture</span>
          </div>
          <h2 className="text-xl font-bold text-white">System Diagram</h2>
          <div className="p-5 rounded-xl bg-black border border-zinc-800 font-mono text-xs text-zinc-300 space-y-2 overflow-x-auto">
            {caseStudy.technicalArchitecture.map((line, idx) => (
              <div key={idx} className={idx === 0 ? "text-white font-bold pb-1" : "text-zinc-300 pl-2"}>
                {line}
              </div>
            ))}
          </div>
        </section>

        {/* 06 — Engineering Considerations */}
        <section className="space-y-3 p-6 rounded-xl bg-zinc-950 border border-zinc-800">
          <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono font-semibold uppercase">
            <Cpu className="w-4 h-4" />
            <span>06 — Engineering Considerations</span>
          </div>
          <h2 className="text-xl font-bold text-white">Design Decisions</h2>
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
        <section className="space-y-3 p-6 rounded-xl bg-zinc-950 border border-zinc-800">
          <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono font-semibold uppercase">
            <Compass className="w-4 h-4" />
            <span>07 — Results & Learnings</span>
          </div>
          <h2 className="text-xl font-bold text-white">Key Takeaways</h2>
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
    </div>
  );
}
