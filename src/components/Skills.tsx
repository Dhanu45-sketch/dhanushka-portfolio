'use client';

import { Smartphone, Code, Cloud, Wrench, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Skills() {
  const { skillGroups } = PORTFOLIO_DATA;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Mobile Development':
        return Smartphone;
      case 'Programming Languages':
        return Code;
      case 'Backend & Cloud':
        return Cloud;
      default:
        return Wrench;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-zinc-900 bg-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-zinc-400 tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>02. Skills & Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Skill Inventory
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl">
            Categorized technical capabilities, development tools, and engineering methodologies acquired through academic coursework and hands-on project implementations.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, idx) => {
            const IconComponent = getCategoryIcon(group.category);

            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-zinc-950 border border-zinc-800/90 hover:border-zinc-700 transition-all duration-200 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Category Title */}
                  <div className="flex items-center gap-3 pb-3 border-b border-zinc-800">
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {group.category}
                      </h3>
                      <span className="text-xs text-zinc-500 font-mono">
                        {group.skills.length} core technologies
                      </span>
                    </div>
                  </div>

                  {/* Skills Tag Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-lg bg-black border border-zinc-800/80 hover:border-zinc-600 transition-colors group"
                      >
                        <div className="text-xs font-semibold text-zinc-200 group-hover:text-white transition-colors flex items-center justify-between">
                          <span>{skill.name}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-white transition-colors" />
                        </div>
                        {skill.description && (
                          <div className="text-[11px] text-zinc-400 mt-1 leading-normal font-sans">
                            {skill.description}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Approach Note */}
        <div className="mt-8 p-4 rounded-lg bg-zinc-950 border border-zinc-800 text-center">
          <p className="text-xs text-zinc-400">
            <strong className="text-zinc-200">Engineering Approach:</strong> Skills listed represent active hands-on application in coursework, hackathons, and personal software builds. Focus is placed on foundational mastery, clean code habits, and continuous learning.
          </p>
        </div>

      </div>
    </section>
  );
}
