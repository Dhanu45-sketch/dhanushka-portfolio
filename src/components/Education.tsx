'use client';

import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Education() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 border-t border-zinc-900 bg-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-zinc-400 tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>05. Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Higher Education
          </h2>
        </div>

        {/* Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-xl max-w-4xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
            <div className="space-y-1">
              <span className="px-2.5 py-1 rounded text-xs font-mono font-semibold bg-zinc-900 border border-zinc-700 text-zinc-200">
                {education.level}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white pt-2">
                {education.degree}
              </h3>
              <div className="text-sm font-medium text-zinc-300">
                {education.institution}
              </div>
              <div className="text-xs text-zinc-400">
                {education.affiliation}
              </div>
            </div>

            <div className="flex flex-col sm:items-end gap-1.5 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-white" />
                <span>{education.period}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-white" />
                <span>{education.location}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-zinc-300">
              <BookOpen className="w-4 h-4 text-white" />
              <span>Curriculum Focus & Core Competencies</span>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {education.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              {[
                'Software Engineering',
                'OOP Architecture',
                'Data Structures',
                'Web & Mobile Systems',
                'Database Systems',
                'Agile Methodology',
                'Software Testing',
                'Cloud Basics'
              ].map((subject, idx) => (
                <div key={idx} className="p-2 rounded bg-black border border-zinc-800 text-[11px] font-mono text-zinc-300 text-center">
                  {subject}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
