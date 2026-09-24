'use client';

import { useState } from 'react';
import { Mail, Github, Linkedin, FileDown, Copy, Check, Send } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Contact() {
  const { profile } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 border-t border-zinc-900 bg-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-zinc-400 tracking-wider uppercase">
            <Mail className="w-3.5 h-3.5" />
            <span>06. Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Contact & Connect
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl">
            Currently seeking software engineering, mobile development, and internship opportunities. Feel free to reach out directly via email or social networks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Links */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-white font-semibold">
                  <Mail className="w-4 h-4" />
                  <span>Direct Email</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-zinc-300 transition-colors border border-zinc-800"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span className="text-white">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-sm font-medium text-white font-mono break-all">
                {profile.email}
              </div>

              <a
                href={`mailto:${profile.email}`}
                className="block text-center w-full py-2.5 rounded-lg bg-zinc-100 text-black font-semibold text-xs hover:bg-white transition-colors border border-white"
              >
                Send Email Directly
              </a>
            </div>

            {/* Social Channels */}
            <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 space-y-3">
              <h3 className="text-xs font-mono font-semibold text-zinc-400 uppercase">
                Professional Profiles
              </h3>
              
              <div className="space-y-2">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-black border border-zinc-800 hover:border-zinc-600 text-xs text-zinc-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-white" />
                    <span>GitHub — Dhanu45-sketch</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 group-hover:text-white">
                    Visit &rarr;
                  </span>
                </a>

                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-black border border-zinc-800 hover:border-zinc-600 text-xs text-zinc-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-white" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 group-hover:text-white">
                    Visit &rarr;
                  </span>
                </a>

                <a
                  href={profile.cvPath}
                  download
                  className="flex items-center justify-between p-3 rounded-lg bg-black border border-zinc-800 hover:border-zinc-600 text-xs text-zinc-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <FileDown className="w-4 h-4 text-white" />
                    <span>Download General CV (PDF)</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 group-hover:text-white">
                    Download &rarr;
                  </span>
                </a>
              </div>
            </div>

          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-zinc-950 border border-zinc-800 space-y-4">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">Quick Inquiry Form</h3>
                <p className="text-xs text-zinc-400">
                  Send a quick message or internship inquiry.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-lg bg-black border border-zinc-700 text-center space-y-2">
                  <Check className="w-8 h-8 text-white mx-auto" />
                  <div className="text-sm font-bold text-white">Message Prepared!</div>
                  <p className="text-xs text-zinc-300">
                    Thank you for reaching out. If you need an immediate response, please email directly at <strong className="text-white">{profile.email}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-mono text-zinc-300">Your Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-zinc-800 text-xs text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-mono text-zinc-300">Your Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-zinc-800 text-xs text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-mono text-zinc-300">Message</label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Dhanushka, I came across your portfolio and wanted to discuss an internship / project opportunity..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black border border-zinc-800 text-xs text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-zinc-100 text-black font-bold text-xs hover:bg-white transition-all shadow-sm active:scale-95 border border-white"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
