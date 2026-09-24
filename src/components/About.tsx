'use client';

import { GraduationCap, Sparkles, Code2, Users, CheckCircle2, Compass } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function About() {
  const { profile } = PORTFOLIO_DATA;

  const keyFocusPoints = [
    {
      icon: Code2,
      title: "Practical Software Building",
      description: "Focused on designing functional software solutions with real user workflows, rather than theoretical prototypes."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Experienced in git workflows, peer code reviews, and cross-functional team hackathons."
    },
    {
      icon: CheckCircle2,
      title: "Testing & Reliability",
      description: "Appreciates clean code organization, data validation, role authorization, and structured testing."
    }
  ];

  return (
    <section id="about" className="py-20 border-t border-zinc-900 bg-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-zinc-400 tracking-wider uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>01. About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Background & Focus
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              {profile.aboutText}
            </p>

            {/* University Highlight Card */}
            <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 flex items-start gap-4 shadow-sm">
              <div className="p-3 rounded-lg bg-zinc-900 text-white mt-1 flex-shrink-0 border border-zinc-700">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-white">Academic Qualifications</h3>
                <p className="text-sm font-medium text-zinc-200">
                  {PORTFOLIO_DATA.education.degree}
                </p>
                <p className="text-xs text-zinc-400">
                  {profile.university} — {profile.partnerInstitute}
                </p>
                <div className="pt-2 flex items-center gap-2">
                  <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
                    {PORTFOLIO_DATA.education.level}
                  </span>
                  <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                    {PORTFOLIO_DATA.education.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Core Values / Focus Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {keyFocusPoints.map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-zinc-950 border border-zinc-800/80 space-y-2">
                  <item.icon className="w-5 h-5 text-white" />
                  <h4 className="text-xs font-semibold text-white">{item.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Side: Currently Exploring & Technologies */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Currently Learning / Exploring Card */}
            <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 space-y-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Sparkles className="w-4 h-4 text-zinc-300" />
                <span>Currently Exploring & Learning</span>
              </div>
              <p className="text-xs text-zinc-400">
                Continuous improvement areas I am actively expanding as part of my undergraduate journey:
              </p>
              
              <ul className="space-y-2.5 pt-1">
                {profile.currentlyLearning.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-100 mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-2 text-[11px] text-zinc-500 font-mono italic border-t border-zinc-900">
                Editable inside data/portfolioData.ts
              </div>
            </div>

            {/* Practical Technologies Highlight */}
            <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 space-y-3">
              <h4 className="text-xs font-semibold text-zinc-400 uppercase font-mono tracking-wider">
                Hands-On Technical Ecosystem
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Flutter',
                  'Dart',
                  'Kotlin',
                  'Android SDK',
                  'Firebase',
                  'Firestore',
                  'Java',
                  'Python',
                  'JavaScript',
                  'SQL',
                  'AWS',
                  'Git'
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
