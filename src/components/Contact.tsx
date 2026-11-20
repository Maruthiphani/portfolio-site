import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Check, Linkedin, Github } from 'lucide-react';

const EMAIL = 'maruthiphanindra.aideveloper@gmail.com';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard denied — silently ignore
    }
  };

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
          <div className="section-number mb-5">07 / Contact</div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05] mb-6">
            Let's build <span className="serif-italic text-stone-700">something</span>
          </h2>
          <div className="hairline" />
          <p className="mt-3 text-stone-600 max-w-2xl">
            Open to AI engineering roles and collaborations on Agentic RAG, multi-agent systems, and LLM
            applications. Reach out and I'll usually reply within a day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5">
          {/* Primary CTA: email */}
          <motion.div
            className="group relative lg:col-span-2 glass rounded-2xl p-7 hover:border-taupe-500/40 transition-colors duration-200 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-taupe-500/10 rounded-full blur-3xl" aria-hidden="true" />
            <div className="relative">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-taupe-700 mb-4">
                <Mail className="w-3.5 h-3.5" />
                primary
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-charcoal mb-1 break-all">{EMAIL}</h3>
              <p className="text-sm text-stone-600 mb-5">Best for role opportunities and project inquiries.</p>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-taupe-600 text-white text-sm font-medium hover:bg-taupe-600 transition-colors duration-200 shadow-sm shadow-taupe-600/20 focus-ring"
                >
                  <Mail className="w-4 h-4" />
                  Compose email
                </a>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-stone-300 bg-white/70 text-sm text-stone-800 hover:border-stone-500 hover:bg-stone-200 transition-colors duration-200 focus-ring"
                  aria-live="polite"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-taupe-700" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

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
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-violet-700 mb-2">
                <Phone className="w-3.5 h-3.5" />
                phone
              </div>
              <div className="text-sm text-charcoal font-medium">+1 (863) 212-4715</div>
            </a>
            <div className="glass rounded-2xl p-5">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-violet-700 mb-2">
                <MapPin className="w-3.5 h-3.5" />
                location
              </div>
              <div className="text-sm text-charcoal font-medium">Remote · USA</div>
              <div className="text-xs text-stone-500 mt-0.5">Open to relocation</div>
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
          <div className="font-mono text-xs uppercase tracking-wider text-stone-500">connect</div>
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/maruthiphanindra/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 grid place-items-center rounded-full border border-stone-200 bg-white/70 text-stone-700 hover:text-charcoal hover:border-taupe-500/50 hover:bg-taupe-500/10 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Maruthiphani"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 grid place-items-center rounded-full border border-stone-200 bg-white/70 text-stone-700 hover:text-charcoal hover:border-taupe-500/50 hover:bg-taupe-500/10 transition-colors"
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
