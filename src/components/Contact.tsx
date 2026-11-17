import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-mono text-xs text-emerald-400 mb-2 tracking-wider">{'// 06. contact'}</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let's build something</h2>
          <p className="mt-3 text-zinc-400 max-w-2xl">
            Open to AI engineering roles and collaborations on Agentic RAG, multi-agent systems, and LLM
            applications. Reach out and I'll usually reply within a day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5">
          {/* Primary CTA: email */}
          <motion.a
            href="mailto:maruthiphanindra.aideveloper@gmail.com"
            className="group relative lg:col-span-2 glass rounded-2xl p-7 hover:border-emerald-500/40 transition-all overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors" />
            <div className="relative">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400 mb-3">
                <Mail className="w-3.5 h-3.5" />
                primary
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 break-all">
                    maruthiphanindra.aideveloper@gmail.com
                  </h3>
                  <p className="text-sm text-zinc-400">Best for role opportunities and project inquiries.</p>
                </div>
                <ArrowUpRight className="w-6 h-6 text-zinc-500 group-hover:text-emerald-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </div>
            </div>
          </motion.a>

          {/* Phone + Location */}
          <motion.div
            className="grid grid-cols-1 gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a
              href="tel:+18632124715"
              className="group glass rounded-2xl p-5 hover:border-violet-500/40 transition-all"
            >
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-violet-300 mb-2">
                <Phone className="w-3.5 h-3.5" />
                phone
              </div>
              <div className="text-sm text-white font-medium">+1 (863) 212-4715</div>
            </a>
            <div className="glass rounded-2xl p-5">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sky-300 mb-2">
                <MapPin className="w-3.5 h-3.5" />
                location
              </div>
              <div className="text-sm text-white font-medium">Remote · USA</div>
              <div className="text-xs text-zinc-500 mt-0.5">Open to relocation</div>
            </div>
          </motion.div>
        </div>

        {/* Socials */}
        <motion.div
          className="mt-8 flex items-center justify-between glass rounded-2xl p-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="font-mono text-xs uppercase tracking-wider text-zinc-500">connect</div>
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/maruthiphanindra/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 grid place-items-center rounded-full border border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Maruthiphani"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 grid place-items-center rounded-full border border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
