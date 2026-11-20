import React from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Calendar } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const Degrees: React.FC = () => {
  const { education } = usePortfolio();

  return (
    <section id="degrees" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-number mb-5">04 / Education</div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05] mb-6">Education</h2>
          <div className="hairline" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {education.degrees.map((degree, index) => (
            <motion.div
              key={index}
              className="group glass rounded-2xl p-6 hover:border-taupe-500/40 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden border border-stone-200 bg-stone-100 grid place-items-center">
                  <img
                    src={degree.logo}
                    alt={degree.institution}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-taupe-700" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-taupe-700">degree</span>
                  </div>
                  <h3 className="text-base font-semibold text-charcoal leading-snug mb-1.5">{degree.degree}</h3>
                  <div className="flex items-center gap-1.5 text-sm text-stone-700 mb-1">
                    <Building2 className="w-3.5 h-3.5 text-stone-500" />
                    <span>{degree.institution}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 font-mono">
                    <Calendar className="w-3 h-3" />
                    <span>{degree.year}</span>
                  </div>
                  <p className="mt-3 text-sm text-stone-600 leading-relaxed">{degree.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Degrees;
