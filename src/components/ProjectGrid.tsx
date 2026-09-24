'use client';

import { FolderGit2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import ProjectCard from './ProjectCard';

export default function ProjectGrid() {
  const { otherProjects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-20 border-t border-zinc-900 bg-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-zinc-400 tracking-wider uppercase">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03. Additional Software Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Mobile & Web Repositories
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl">
            Selected applications and practical repositories demonstrating cross-platform mobile development, native Android interfaces, hackathon builds, and web foundations.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
