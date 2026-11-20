import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const stats = [
  { label: 'years software', value: '8+' },
  { label: 'years Agentic RAG · LLM', value: '3+' },
  { label: 'production AI systems', value: '4' },
];

const Hero: React.FC = () => {
  const { personalInfo } = usePortfolio();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* subtle ambient — one quiet halo, no mesh, no grid */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full bg-emerald-500/[0.06] blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* status eyebrow */}
          <div className="flex items-center gap-3 mb-10">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-taupe-600 opacity-60 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-taupe-600" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-stone-500">
              available · open to relocation
            </span>
          </div>

          {/* name — serif, editorial scale */}
          <h1 className="font-serif text-[clamp(3.5rem,10vw,8rem)] leading-[0.95] text-charcoal mb-8">
            {personalInfo.name.split(' ').slice(0, 2).join(' ')}
            <br />
            <span className="serif-italic text-stone-700">
              {personalInfo.name.split(' ').slice(2).join(' ')}
            </span>
          </h1>

          {/* role line */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-10 text-stone-600">
            <span className="text-base md:text-lg">AI Engineer</span>
            <span className="text-stone-300">·</span>
            <span className="text-base md:text-lg">Agentic RAG</span>
            <span className="text-stone-300">·</span>
            <span className="text-base md:text-lg">LLM Applications</span>
            <span className="text-stone-300">·</span>
            <span className="text-base md:text-lg">Cloud-native AI Systems</span>
          </div>

          <div className="hairline mb-10" />

          {/* bio + portrait row */}
          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start mb-12">
            <p className="text-lg md:text-xl text-stone-700 leading-relaxed max-w-3xl">
              I design production-grade{' '}
              <span className="serif-italic text-taupe-700">Agentic RAG</span> systems and
              multi-agent LLM workflows on AWS Bedrock and Azure OpenAI, turning messy enterprise
              problems into measurable, citation-backed automation.
            </p>
            <div className="shrink-0">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-1 ring-stone-200 shadow-xl">
                <img
                  src={personalInfo.photoUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* CTAs — underlined serif links, not pill buttons */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-16">
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 text-base text-charcoal border-b border-taupe-600/60 pb-1 hover:border-emerald-300 transition-colors duration-300 focus-ring"
            >
              View experience
              <ArrowRight className="w-4 h-4 text-taupe-700 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-base text-stone-600 hover:text-charcoal border-b border-stone-200 pb-1 hover:border-stone-500 transition-colors duration-300 focus-ring"
            >
              Get in touch
            </a>
          </div>

          <div className="hairline mb-10" />

          {/* stats — rule-separated inline row, not a grid */}
          <div className="flex flex-wrap items-baseline gap-x-8 gap-y-4 text-sm">
            {stats.map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && <span className="text-stone-200 hidden sm:inline">·</span>}
                <div className="flex items-baseline gap-2">
                  <span className="font-serif tabular text-2xl md:text-3xl text-charcoal">
                    {s.value}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-500">
                    {s.label}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
