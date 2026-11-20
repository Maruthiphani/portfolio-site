import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Boxes, Wrench, Cpu } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

type Group = {
  name: string;
  icon: React.ReactNode;
  color: string;
  tint: string;
  skills: string[];
};

const groups: Group[] = [
  {
    name: 'Agentic AI & LLMs',
    icon: <Cpu className="w-4 h-4" />,
    color: 'text-taupe-700',
    tint: 'border-taupe-500/20 bg-taupe-500/5 hover:bg-taupe-500/10',
    skills: [
      'Agentic RAG',
      'LangGraph',
      'Semantic Kernel',
      'Multi-Agent Systems',
      'Tool-Calling & Function Calling',
      'Azure OpenAI (GPT-4 / GPT-4o)',
      'AWS Bedrock (Claude Sonnet / Haiku)',
    ],
  },
  {
    name: 'Retrieval & Data',
    icon: <Database className="w-4 h-4" />,
    color: 'text-taupe-700',
    tint: 'border-taupe-500/20 bg-taupe-500/5 hover:bg-taupe-500/10',
    skills: [
      'Hybrid Retrieval (pgvector, BM25)',
      'Azure AI Search',
      'Azure Document Intelligence',
      'Semantic Chunking & Reranking',
      'PostgreSQL',
    ],
  },
  {
    name: 'Backend & APIs',
    icon: <Code2 className="w-4 h-4" />,
    color: 'text-stone-700',
    tint: 'border-stone-300 bg-stone-200/40 hover:bg-stone-200/60',
    skills: ['Python', 'FastAPI', 'REST', 'OAuth2 / OIDC / JWT', 'Swagger / OpenAPI'],
  },
  {
    name: 'Frontend',
    icon: <Boxes className="w-4 h-4" />,
    color: 'text-stone-700',
    tint: 'border-stone-300 bg-stone-200/40 hover:bg-stone-200/60',
    skills: ['React', 'Tailwind CSS', 'Redux', 'Vite', 'TypeScript'],
  },
  {
    name: 'Cloud',
    icon: <Cloud className="w-4 h-4" />,
    color: 'text-violet-700',
    tint: 'border-violet-500/20 bg-violet-500/5 hover:bg-violet-500/10',
    skills: [
      'AWS (Bedrock, EC2, S3, RDS, IAM, KMS)',
      'Azure (AKS, Functions, Blob, Data Factory)',
      'Docker',
      'GitHub Actions',
      'OpenTelemetry',
    ],
  },
  {
    name: 'ITSM & Ops',
    icon: <Wrench className="w-4 h-4" />,
    color: 'text-violet-700',
    tint: 'border-violet-500/20 bg-violet-500/5 hover:bg-violet-500/10',
    skills: ['ServiceNow (REST API)', 'Jira', 'CloudWatch', 'ETL Pipelines'],
  },
];

const About: React.FC = () => {
  const { about } = usePortfolio();

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-number mb-5">01 / About</div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05] mb-6">About me</h2>
          <div className="hairline" />
        </motion.div>

        {/* Bento grid */}
        <div className="grid lg:grid-cols-5 gap-5">
          {/* Bio card */}
          <motion.div
            className="lg:col-span-3 glass rounded-2xl p-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="font-mono text-[11px] uppercase tracking-wider text-stone-500 mb-4">bio</div>
            <p className="text-stone-700 leading-relaxed whitespace-pre-line text-[15px]">
              {about.bio}
            </p>
          </motion.div>

          {/* Quick facts */}
          <motion.div
            className="lg:col-span-2 grid grid-cols-2 gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="glass rounded-2xl p-5">
              <div className="font-mono text-[11px] uppercase tracking-wider text-taupe-700 mb-3">focus</div>
              <div className="text-sm text-stone-800 leading-relaxed">
                Agentic RAG · multi-agent orchestration · grounded, citation-backed LLM systems
              </div>
            </div>
            <div className="glass rounded-2xl p-5">
              <div className="font-mono text-[11px] uppercase tracking-wider text-violet-700 mb-3">cloud</div>
              <div className="text-sm text-stone-800 leading-relaxed">
                AWS Bedrock · Azure OpenAI · pgvector · Azure AI Search
              </div>
            </div>
            <div className="glass rounded-2xl p-5">
              <div className="font-mono text-[11px] uppercase tracking-wider text-stone-600 mb-3">stack</div>
              <div className="text-sm text-stone-800 leading-relaxed">
                Python · FastAPI · React · Tailwind · PostgreSQL · Docker
              </div>
            </div>
            <div className="glass rounded-2xl p-5">
              <div className="font-mono text-[11px] uppercase tracking-wider text-violet-700 mb-3">ops</div>
              <div className="text-sm text-stone-800 leading-relaxed">
                ServiceNow · CloudWatch · OpenTelemetry · AKS · Helm
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-number mb-4">skills</div>
          <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">What I work with</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {groups.map((g) => (
              <motion.div
                key={g.name}
                className="glass rounded-2xl p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className={`flex items-center gap-2 mb-4 ${g.color}`}>
                  {g.icon}
                  <span className="font-mono text-xs uppercase tracking-wider">{g.name}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className={`px-2.5 py-1 rounded-md border text-[12px] text-stone-800 font-mono transition-colors ${g.tint}`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
