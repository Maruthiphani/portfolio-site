import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, TrendingDown, TrendingUp } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

type Metric = { label: string; value: string; direction?: 'up' | 'down' };

const highlightMetrics: Record<string, Metric[]> = {
  'Acadia Consultants': [
    { label: 'ticket resolution time', value: '20-30m → 2-3m', direction: 'down' },
  ],
  'HCLTech (Client: Citi Bank)': [
    { label: 'document review time', value: '-60%', direction: 'down' },
    { label: 'retrieval accuracy', value: '+35%', direction: 'up' },
    { label: 'MTTR for incidents', value: '-40%', direction: 'down' },
  ],
  'GyanSys Inc.': [
    { label: 'HR support tickets', value: '-30%', direction: 'down' },
    { label: 'first-response resolution', value: '+40%', direction: 'up' },
  ],
};

const Experience: React.FC = () => {
  const { experience } = usePortfolio();

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-mono text-xs text-emerald-400 mb-2 tracking-wider">{'// 02. experience'}</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Where I've built</h2>
          <p className="mt-3 text-zinc-400 max-w-2xl">
            A trail of agentic AI, RAG, and full-stack systems shipped across enterprise and consulting work.
          </p>
        </motion.div>

        {/* timeline */}
        <div className="relative max-w-4xl">
          {/* rail */}
          <div className="absolute left-4 md:left-5 top-2 bottom-2 w-px bg-gradient-to-b from-emerald-500/60 via-zinc-800 to-transparent" />

          <div className="space-y-6">
            {experience.jobs.map((job, index) => {
              const metrics = highlightMetrics[job.company];
              const isCurrent = /present|current/i.test(job.dates);
              return (
                <motion.div
                  key={index}
                  className="relative pl-12 md:pl-16"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  {/* dot */}
                  <div className="absolute left-2 md:left-3 top-6 flex items-center justify-center">
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        isCurrent
                          ? 'bg-emerald-400 border-emerald-300 animate-pulse-glow'
                          : 'bg-zinc-900 border-zinc-600'
                      }`}
                    />
                  </div>

                  <div className="glass rounded-2xl p-6 hover:border-zinc-700 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-lg md:text-xl font-semibold text-white">{job.title}</h3>
                          {isCurrent && (
                            <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                              current
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-1.5 text-sm text-zinc-300">
                          <Briefcase className="w-3.5 h-3.5 text-zinc-500" />
                          <span>{job.company}</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-start md:items-end gap-1 text-xs">
                        <div className="flex items-center gap-1.5 font-mono text-zinc-400">
                          <Calendar className="w-3 h-3" />
                          <span>{job.dates}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-zinc-500">
                          <MapPin className="w-3 h-3" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* metrics */}
                    {metrics && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                        {metrics.map((m) => (
                          <div
                            key={m.label}
                            className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-3 py-2.5"
                          >
                            <div className="flex items-center gap-1.5">
                              {m.direction === 'down' ? (
                                <TrendingDown className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                              )}
                              <span className="font-mono text-sm font-semibold text-emerald-300">{m.value}</span>
                            </div>
                            <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 mt-1">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <p className="text-sm text-zinc-300 leading-relaxed">{job.description}</p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {job.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2.5 py-1 rounded-md border border-zinc-800 bg-zinc-900/80 text-[12px] text-zinc-300 font-mono hover:border-zinc-600 hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
