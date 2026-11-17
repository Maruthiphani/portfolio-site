import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MapPin, Mail } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const stats = [
  { label: 'yrs software', value: '8+' },
  { label: 'yrs Agentic RAG / LLM', value: '3+' },
  { label: 'production AI systems', value: '4' },
];

const Hero: React.FC = () => {
  const { personalInfo } = usePortfolio();

  return (
    <section
      id="hero"
      className="relative flex items-center min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* Left: text */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* availability pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-mono text-emerald-300 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              available for new AI engineering roles · open to relocation
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-5">
              <span className="block text-zinc-100">{personalInfo.name.split(' ').slice(0, 2).join(' ')}</span>
              <span className="block text-gradient-emerald">{personalInfo.name.split(' ').slice(2).join(' ')}</span>
            </h1>

            <p className="font-mono text-sm sm:text-base text-zinc-400 mb-8 max-w-2xl leading-relaxed">
              {personalInfo.tagline}
            </p>

            <p className="text-lg text-zinc-300 max-w-2xl mb-10 leading-relaxed">
              I design production-grade{' '}
              <span className="text-emerald-300 font-medium">Agentic RAG</span> systems and{' '}
              <span className="text-violet-300 font-medium">multi-agent LLM workflows</span> on AWS Bedrock and Azure OpenAI,
              turning messy enterprise problems into measurable, citation-backed automation.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#experience"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-400 text-zinc-950 font-medium text-sm hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/20"
              >
                View experience
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 bg-zinc-900/60 text-zinc-200 font-medium text-sm hover:border-zinc-500 hover:bg-zinc-800 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Get in touch
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-lg">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{s.value}</div>
                  <div className="font-mono text-[11px] text-zinc-500 mt-1 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: portrait + "now building" card */}
          <motion.div
            className="lg:col-span-2 flex flex-col items-center lg:items-end gap-5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative">
              {/* glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/30 via-teal-500/20 to-violet-500/30 rounded-3xl blur-2xl opacity-60" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
                <img
                  src={personalInfo.photoUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 glass px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-emerald-400" />
                <span className="font-mono text-[11px] text-zinc-300">Remote · USA</span>
              </div>
            </div>

            {/* now building card */}
            <div className="w-full max-w-sm glass rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-violet-300" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-violet-300">now building</span>
              </div>
              <div className="text-sm font-semibold text-white mb-1">Acadia LogIQ</div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Enterprise Agentic AI support platform on AWS Bedrock, dropping L1/L2 incident resolution from 20 to 30 min down to 2 to 3 min.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
