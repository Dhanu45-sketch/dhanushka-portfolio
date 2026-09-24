'use client';

import { Trophy, Award, Users, Flame } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Achievements() {
  const { achievements } = PORTFOLIO_DATA;

  const getAchievementIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return Trophy;
      case 1:
        return Award;
      case 2:
        return Flame;
      default:
        return Users;
    }
  };

  return (
    <section id="achievements" className="py-20 border-t border-zinc-900 bg-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-zinc-400 tracking-wider uppercase">
            <Trophy className="w-3.5 h-3.5" />
            <span>04. Competitions & Community</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Achievements & Hackathons
          </h2>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((item, idx) => {
            const IconComponent = getAchievementIcon(idx);

            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-zinc-950 border border-zinc-800/90 hover:border-zinc-700 transition-colors flex items-start gap-4"
              >
                <div className="p-3 rounded-lg bg-black border border-zinc-700 text-white flex-shrink-0 mt-0.5">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-bold text-white">
                      {item.title}
                    </h3>
                    {item.badge && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-mono text-zinc-400">
                    {item.organization}
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
