'use client';

import { useState } from 'react';
import { Github, ExternalLink, User, Wrench, Star, BookOpen, CheckCircle2, Image as ImageIcon, Code, ChevronLeft, ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import FixigoCaseStudyModal from './FixigoCaseStudyModal';

export default function FeaturedProject() {
  const { fixigoProject } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<'customer' | 'handyman'>('customer');
  const [viewMode, setViewMode] = useState<'screenshots' | 'code'>('screenshots');
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  const images = fixigoProject.images || [];

  const handleNextImage = () => {
    setActiveImageIdx((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setActiveImageIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="fixigo" className="py-20 border-t border-zinc-900 bg-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-mono font-semibold text-zinc-300">
            <Star className="w-3.5 h-3.5 fill-white text-white" />
            <span>Flagship Application Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Fixigo — Handyman Service Marketplace
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 max-w-3xl">
            A dual-sided Flutter mobile application connecting Sri Lankan customers with reliable handymen for home repairs, maintenance, and emergency services.
          </p>
        </div>

        {/* Showcase Container */}
        <div className="rounded-2xl bg-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl">
          
          {/* Top Header Bar */}
          <div className="px-6 py-4 bg-black border-b border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
              <span className="text-xs font-mono font-semibold text-zinc-200">
                Fixigo App • {fixigoProject.version}
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-900 text-zinc-300 border border-zinc-800">
                Multi-User Platform
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={fixigoProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-xs font-semibold text-zinc-200 hover:text-white hover:border-zinc-500 transition-all"
              >
                <Github className="w-3.5 h-3.5 text-white" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <button
                onClick={() => setIsCaseStudyOpen(true)}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-white text-black hover:bg-zinc-200 text-xs font-bold transition-all shadow-sm border border-white"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>View Full Case Study</span>
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Overview & Features */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">Project Overview</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Fixigo bridges the gap between skilled handymen and customers seeking home repair services in Kandy, Sri Lanka. Built with Flutter and Firebase, it handles real-time job requests, role-based interfaces, category search, and emergency booking workflows.
                </p>
              </div>

              {/* Technologies Badges */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-zinc-400 uppercase font-semibold">
                  Technologies & Libraries Used:
                </span>
                <div className="flex flex-wrap gap-2">
                  {fixigoProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-black border border-zinc-800 text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Individual Contribution Note */}
              <div className="p-4 rounded-xl bg-black border border-zinc-800 space-y-2">
                <div className="text-xs font-mono font-semibold text-white">
                  My Development Contribution
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Collaborated in a team environment primarily focusing on Flutter UI screen development, Customer & Handyman dashboard screens, Cloud Firestore data model structures, and authentication flow testing.
                </p>
              </div>

              {/* Dual-Sided Features Selector Tabs */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 border-b border-zinc-800 pb-2">
                  <button
                    onClick={() => setActiveTab('customer')}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                      activeTab === 'customer'
                        ? 'bg-zinc-800 text-white border border-zinc-600'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>Customer Functionality</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('handyman')}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                      activeTab === 'handyman'
                        ? 'bg-zinc-800 text-white border border-zinc-600'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <Wrench className="w-3.5 h-3.5" />
                    <span>Handyman Functionality</span>
                  </button>
                </div>

                <ul className="space-y-2.5 max-h-52 overflow-y-auto pr-2">
                  {(activeTab === 'customer'
                    ? fixigoProject.customerFeatures
                    : fixigoProject.handymanFeatures
                  )?.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right Column: Real Screenshots & Code View Toggle */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="w-full rounded-2xl bg-black border border-zinc-800 p-4 shadow-xl space-y-3">
                
                {/* Mode Selector (Screenshots vs Code Snippet) */}
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setViewMode('screenshots')}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                        viewMode === 'screenshots'
                          ? 'bg-zinc-800 text-white border border-zinc-700'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      <ImageIcon className="w-3.5 h-3.5" />
                      <span>App Screenshots ({images.length})</span>
                    </button>

                    <button
                      onClick={() => setViewMode('code')}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                        viewMode === 'code'
                          ? 'bg-zinc-800 text-white border border-zinc-700'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      <Code className="w-3.5 h-3.5" />
                      <span>Dart Code Snippet</span>
                    </button>
                  </div>

                  <span className="text-[10px] font-mono text-zinc-500 hidden sm:inline-block">
                    {viewMode === 'screenshots' ? `Screen ${activeImageIdx + 1}/${images.length}` : fixigoProject.codeSnippet?.filename}
                  </span>
                </div>

                {/* Display Content Container */}
                {viewMode === 'screenshots' ? (
                  <div className="space-y-3">
                    {/* Main Image Frame */}
                    <div className="relative aspect-[9/16] sm:aspect-[4/3] w-full max-h-[440px] rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center overflow-hidden group">
                      {images.length > 0 ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={images[activeImageIdx]}
                          alt={`Fixigo screenshot ${activeImageIdx + 1}`}
                          className="w-full h-full object-contain p-2"
                        />
                      ) : (
                        <div className="text-xs text-zinc-500 font-mono">No screenshot loaded</div>
                      )}

                      {/* Navigation Controls */}
                      {images.length > 1 && (
                        <>
                          <button
                            onClick={handlePrevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/80 text-white border border-zinc-700 opacity-80 hover:opacity-100 transition-opacity"
                            aria-label="Previous screenshot"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={handleNextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/80 text-white border border-zinc-700 opacity-80 hover:opacity-100 transition-opacity"
                            aria-label="Next screenshot"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Thumbnail Strip */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1">
                      {images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIdx(idx)}
                          className={`relative w-14 h-14 rounded-lg overflow-hidden border transition-all flex-shrink-0 bg-zinc-950 ${
                            activeImageIdx === idx ? 'border-white scale-105' : 'border-zinc-800 opacity-50 hover:opacity-100'
                          }`}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Real Dart Code View Container */
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-400 bg-zinc-950 p-2 rounded border border-zinc-800">
                      <span>{fixigoProject.codeSnippet?.filename}</span>
                      <span className="text-white uppercase font-bold text-[10px]">
                        {fixigoProject.codeSnippet?.language}
                      </span>
                    </div>

                    <pre className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-xs text-zinc-300 overflow-x-auto leading-relaxed max-h-[440px]">
                      <code>{fixigoProject.codeSnippet?.code}</code>
                    </pre>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Case Study Modal */}
      <FixigoCaseStudyModal
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
      />
    </section>
  );
}
