'use client';

import { useState } from 'react';
import { Github, ExternalLink, Smartphone, Code, ShieldAlert, Globe, Cloud, Image as ImageIcon, ChevronLeft, ChevronRight, Cpu, Thermometer, Recycle } from 'lucide-react';
import { Project } from '@/data/portfolioData';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const [activeTab, setActiveTab] = useState<'info' | 'screenshots' | 'code'>('info');
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'aws-cloud':
        return Cloud;
      case 'aura':
        return Smartphone;
      case 'elemental-asmr':
        return Code;
      case 'resq':
        return ShieldAlert;
      case 'airguard':
        return Cpu;
      case 'ac-controller':
        return Thermometer;
      case 'neptune-recyclers':
        return Recycle;
      default:
        return Globe;
    }
  };

  const IconComponent = getProjectIcon(project.id);
  const images = project.images || [];
  const hasCode = !!project.codeSnippet;

  const handleNextImage = () => {
    setActiveImageIdx((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setActiveImageIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800/90 hover:border-zinc-700 transition-all duration-200 shadow-sm flex flex-col justify-between group">
      <div className="space-y-4">
        
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-3">
          <div className="p-2.5 rounded-lg bg-black border border-zinc-700 text-white group-hover:border-zinc-500 transition-colors">
            <IconComponent className="w-5 h-5" />
          </div>

          <div className="flex items-center gap-2">
            {project.badge && (
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300">
                {project.badge}
              </span>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded transition-colors"
              aria-label={`GitHub repository for ${project.title}`}
              title="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-white group-hover:text-zinc-200 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-zinc-400">
            {project.tagline}
          </p>
        </div>

        {/* View Mode Selectors (Info vs Screenshots vs Code Snippet) */}
        {(images.length > 0 || hasCode) && (
          <div className="flex items-center gap-1.5 border-b border-zinc-900 pb-2 pt-1 text-xs">
            <button
              onClick={() => setActiveTab('info')}
              className={`px-2.5 py-1 rounded text-[11px] font-mono font-semibold transition-colors ${
                activeTab === 'info' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              Overview
            </button>

            {images.length > 0 && (
              <button
                onClick={() => setActiveTab('screenshots')}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-mono font-semibold transition-colors ${
                  activeTab === 'screenshots' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                <ImageIcon className="w-3 h-3" />
                <span>Screenshots ({images.length})</span>
              </button>
            )}

            {hasCode && (
              <button
                onClick={() => setActiveTab('code')}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-mono font-semibold transition-colors ${
                  activeTab === 'code' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                <Code className="w-3 h-3" />
                <span>Code Snippet</span>
              </button>
            )}
          </div>
        )}

        {/* Content Body Based on Active Tab */}
        {activeTab === 'info' && (
          <div className="space-y-3">
            {images.length > 0 && (
              <div className="aspect-[16/10] w-full rounded-lg bg-black border border-zinc-800 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={images[0]}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <p className="text-xs text-zinc-300 leading-relaxed">
              {project.description}
            </p>
          </div>
        )}

        {activeTab === 'screenshots' && images.length > 0 && (
          <div className="space-y-2 pt-1">
            <div className="relative aspect-[16/9] w-full rounded-lg bg-black border border-zinc-800 flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images[activeImageIdx]}
                alt={`${project.title} screenshot ${activeImageIdx + 1}`}
                className="w-full h-full object-contain p-1"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-1 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/80 text-white border border-zinc-700 opacity-80 hover:opacity-100"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-1 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/80 text-white border border-zinc-700 opacity-80 hover:opacity-100"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </>
              )}
            </div>

            <div className="text-[10px] font-mono text-zinc-500 text-center">
              Image {activeImageIdx + 1} of {images.length}
            </div>
          </div>
        )}

        {activeTab === 'code' && project.codeSnippet && (
          <div className="space-y-1.5 pt-1">
            <div className="text-[10px] font-mono text-zinc-400 bg-black p-1.5 rounded border border-zinc-800 flex items-center justify-between">
              <span>{project.codeSnippet.filename}</span>
              <span className="uppercase text-white">{project.codeSnippet.language}</span>
            </div>
            <pre className="p-3 rounded-lg bg-black border border-zinc-800 font-mono text-[11px] text-zinc-300 overflow-x-auto max-h-48">
              <code>{project.codeSnippet.code}</code>
            </pre>
          </div>
        )}

      </div>

      {/* Footer Technologies & Links */}
      <div className="pt-6 border-t border-zinc-800 mt-4 space-y-3">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-black border border-zinc-800 text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-zinc-300 group/link"
        >
          <span>View Source Code</span>
          <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}
