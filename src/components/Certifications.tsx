import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, BadgeCheck } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const Certifications: React.FC = () => {
  const { certifications } = usePortfolio();

  return (
    <section id="certifications" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-mono text-xs text-emerald-400 mb-2 tracking-wider">{'// 04. certifications'}</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Certifications</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.items.map((certification, index) => (
            <motion.div
              key={index}
              className="group glass rounded-2xl p-5 hover:border-violet-500/40 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 grid place-items-center">
                  <img
                    src={certification.logo}
                    alt={certification.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <BadgeCheck className="w-3.5 h-3.5 text-violet-300" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-violet-300">verified</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white leading-snug mb-1.5">{certification.name}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{certification.issuer}</p>
                  <div className="flex items-center gap-1.5 mt-2.5 text-xs text-zinc-500 font-mono">
                    <Calendar className="w-3 h-3" />
                    <span>{certification.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
