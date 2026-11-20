import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Sparkles } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const Achievements: React.FC = () => {
  const { achievements } = usePortfolio();

  return (
    <section id="achievements" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-number mb-5">06 / Achievements</div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05] mb-6">
            Hackathons &amp; <span className="serif-italic text-stone-700">recognition</span>
          </h2>
          <div className="hairline" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {achievements.items.map((achievement, index) => (
            <motion.div
              key={index}
              className="group glass rounded-2xl p-6 hover:border-taupe-500/40 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-taupe-500/20 to-taupe-800/10 border border-taupe-500/30 grid place-items-center group-hover:scale-105 transition-transform">
                  {index === 0 ? (
                    <Sparkles className="w-5 h-5 text-taupe-700" />
                  ) : (
                    <Trophy className="w-5 h-5 text-taupe-700" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-base font-semibold text-charcoal">{achievement.title}</h3>
                    <span className="font-mono text-[11px] text-stone-500 flex-shrink-0">{achievement.year}</span>
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
