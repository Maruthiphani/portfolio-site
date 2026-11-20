import React, { createContext, useContext, ReactNode } from 'react';

// Define types for our portfolio data
export interface PersonalInfo {
  name: string;
  tagline: string;
  photoUrl: string;
}

export interface AboutSection {
  bio: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  description: string;
  year: string;
  icon: string;
 
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  logo: string;
}

export interface Degree {
  institution: string;
  degree: string;
  year: string;
  description: string;
  logo: string;
}

export interface Job {
  title: string;
  company: string;
  location: string;
  dates: string;
  description: string;
  technologies: string[];
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  about: AboutSection;
  achievements: {
    items: Achievement[];
  };
  certifications: {
    items: Certification[];
  };
  education: {
    degrees: Degree[];
  };
  experience: {
    jobs: Job[];
  };
}

// Create a default portfolio data
const defaultPortfolioData: PortfolioData = {
  personalInfo: {
    name: "Maruthi Phanindra Ayyagari",
    tagline: "AI Engineer | Agentic RAG | LLM Applications | Cloud-Native AI Systems",
    photoUrl: "http://i.imgur.com/DrYFhCD.jpeg"//"https://i.imgur.com/3cZCvTE.jpeg"
  },
  about: {
    bio: `I'm an AI Engineer with about 8 years in software and roughly 3+ years building Agentic RAG, LLM-powered applications, and autonomous AI systems on AWS and Azure. I'm currently building an enterprise Agentic AI support platform that helps L1/L2 engineers triage, diagnose, and resolve production incidents faster. I design production-grade agentic workflows with LangGraph, Azure OpenAI (GPT-4, GPT-4o, Mistral), and AWS Bedrock (Claude Sonnet, Claude Haiku, Mistral), combining tool-calling agents, hybrid retrieval, and dynamic planning to deliver context-aware automation.

          My approach is grounded in discipline, curiosity, and ownership. I like turning complex business problems into measurable AI outcomes, architecting multi-agent systems, and leading cross-functional delivery end-to-end. I care deeply about grounded, citation-backed answers, evaluation, and guardrails that make AI systems safe to run in production.`,
    skills: [
      "Agentic RAG",
      "LangGraph",
      "Semantic Kernel",
      "Azure OpenAI (GPT-4 / GPT-4o)",
      "AWS Bedrock (Claude Sonnet / Haiku)",
      "Multi-Agent Systems",
      "Tool-Calling & Function Calling",
      "Hybrid Retrieval (pgvector, BM25)",
      "Azure AI Search",
      "Azure Document Intelligence",
      "Python",
      "FastAPI",
      "React",
      "Tailwind CSS",
      "PostgreSQL",
      "Docker",
      "AWS (Bedrock, EC2, S3, RDS)",
      "Azure (AKS, Functions, Blob)",
      "OpenTelemetry",
      "ServiceNow Integration"
    ]
  },
  achievements: {
    items: [
      {
        title: "Microsoft AI Agents Hackathon",
        description: "Built an AI-powered WhatsApp automation agent using LLMs and intent classification during the Microsoft AI Agents Hackathon.",
        year: "2025",
        icon: "Digital Certificate"
      },
      {
        title: "Perplexity AI Hackathon",
        description: "Participated in the hackathon organised by Perplexity AI, exploring agentic search and real-time retrieval use cases.",
        year: "2025",
        icon: "Digital Certificate"
      }
      // Add more achievements as needed
    ]
  },
  certifications: {
    items: [
      {
        name: "Google AI Essentials",
        issuer: "Google",
        date: "01 2025",
        logo: "https://i.imgur.com/O14Xgkg.jpeg"
      },
      {
        name: "Machine Learning Specialization",
        issuer: "Stanford University & DeepLearning.AI (Coursera)",
        date: "01 2025",
        logo: "https://i.imgur.com/o7RrSLl.jpeg"
      },
      {
        name: "Microsoft Azure Fundamentals (AZ-900)",
        issuer: "Microsoft",
        date: "07 2024",
        logo: "https://i.imgur.com/2msoQFQ.jpeg"
      },
      {
        name: "Claude Code 101",
        issuer: "Anthropic — Claude Academy",
        date: "11 2026",
        logo: "/certificates/claude-badge.svg",
        description: "Claude Code from first principles: the agentic loop, context window, tools, and permissions; prompting across manual, auto-accept, auto, and Plan modes; the Explore → Plan → Code → Commit workflow; context commands (/compact, /clear, /context); CLAUDE.md memory; custom subagents; MCP server integration; and hooks for deterministic control.",
        credentialUrl: "/certificates/claude-academy-badge-claude-code-101.pdf"
      },
      {
        name: "Model Context Protocol — Advanced Topics",
        issuer: "Anthropic — Claude Academy",
        date: "11 2026",
        logo: "/certificates/claude-badge.svg",
        description: "Advanced MCP beyond the basics: sampling (servers requesting LLM calls through the client), progress and logging notifications, roots for scoped filesystem access, JSON message types, and the STDIO and StreamableHTTP transports — including stateful vs stateless deployment trade-offs.",
        credentialUrl: "/certificates/claude-academy-badge-model-context-protocol-advanced-topics.pdf"
      },
      {
        name: "Building Effective Human-Agent Teams",
        issuer: "Anthropic — Claude Academy",
        date: "11 2026",
        logo: "/certificates/claude-badge.svg",
        description: "Moving teams from single-player to multiplayer AI: how multiplayer agents differ from traditional chatbots, the four principles of healthy human-agent teams (clear roles, a written north star, gradual release, and right-sized information access), and organizational readiness for agent-native work.",
        credentialUrl: "/certificates/claude-academy-badge-building-effective-human-agent-teams.pdf"
      }
      // Add more certifications as needed
    ]
  },
  education: {
    degrees: [
      {
        institution: "MLR Institute of Technology, Hyderabad, India",
        degree: "B.Tech, Electronics and Communication Engineering",
        year: "2013 - 2017",
        description: "Earned a degree in Electronics and Communication Engineering with distinction.",
        logo: "https://i.imgur.com/2cRcqab.jpeg"
      },
      {
        institution: "University of Missouri - Kansas City, MO, USA",
        degree: "M.S., Computer Science",
        year: "2022 - 2023",
        description: "Earned a Master's degree in Computer Science with a 3.85 GPA.",
        logo: "https://i.imgur.com/AHQ0qyC.jpeg"
      }
      // Add more degrees as needed
    ]
  },
  experience: {
    jobs: [
      {
        title: "Artificial Intelligence Engineer",
        company: "Acadia Consultants",
        location: "Remote, USA",
        dates: "Jun 2026 - Present",
        description: "Building Acadia LogIQ, an enterprise Agentic AI support platform that helps L1/L2 engineers triage and resolve production tickets, targeting a drop in resolution effort from 20 to 30 minutes down to 2 to 3 minutes. I built the knowledge layer (historical tickets, SOPs, and runbooks in PostgreSQL pgvector with hybrid dense + BM25 search using Amazon Titan embeddings), and I'm developing custom Agentic RAG workflows on AWS Bedrock (Claude Sonnet, Haiku, Mistral) that surface similar incidents, infer root causes, recommend fixes, and flag L3 escalations. I built an automated RCA engine that produces a full root-cause and gap-analysis report from a ticket number alone, integrated ServiceNow, SLA tracking, and CloudWatch into a single operational dashboard, and am designing LLM evaluation and guardrail layers (grounding checks, citation enforcement) to reduce hallucinations. I deliver the platform end-to-end with FastAPI/Flask services, a React frontend, multi-tenant isolation, and AWS deployment (EC2, S3, RDS, IAM, KMS).",
        technologies: ["AWS Bedrock", "Claude Sonnet", "Claude Haiku", "Agentic RAG", "pgvector", "FastAPI", "React", "ServiceNow", "CloudWatch"]
      },
      {
        title: "Senior Analyst, Agentic RAG & Document Intelligence",
        company: "HCLTech (Client: Citi Bank)",
        location: "United States",
        dates: "Jan 2025 - Jun 2026",
        description: "Architected a production-grade Agentic RAG platform on Microsoft Azure, enabling autonomous reasoning, planning, and multi-step Q&A across tens of thousands of internal contracts, technical guides, and operational documents. Designed multi-agent orchestration with LangGraph, using specialized agents for retrieval, summarization, glossary expansion, and compliance validation coordinated through a planner agent that decomposes complex queries into tool-driven workflows. Built ingestion with Azure Document Intelligence for layout-aware extraction, and implemented hybrid retrieval combining Azure AI Search (semantic + vector + keyword) with custom reranking and dynamic metadata filters, improving answer accuracy by 35%. Integrated Azure OpenAI (GPT-4, GPT-4o) with intelligent model routing to balance latency, cost, and quality. Deployed FastAPI services on AKS with Helm, Docker, OpenTelemetry, and Grafana for auto-scaling, distributed tracing, and SLO-based alerting. Delivered a React and Tailwind dashboard with streaming responses, inline citations, and agent-trace visualization. Impact: reduced document review time by 60% and cut MTTR for operational incidents by 40%.",
        technologies: ["LangGraph", "Azure OpenAI", "GPT-4o", "Azure AI Search", "Azure Document Intelligence", "FastAPI", "AKS", "React", "Tailwind", "OpenTelemetry"]
      },
      {
        title: "Software AI Developer",
        company: "GyanSys Inc.",
        location: "United States",
        dates: "Jul 2023 - Nov 2024",
        description: "Designed an agentic AI assistant for enterprise HR and employee self-service using a customized Microsoft Copilot framework, Azure OpenAI, and Semantic Kernel. It handles multi-turn HR queries with autonomous tool selection, intent classification, and structured escalation paths. Built RAG pipelines combining Azure AI Search with Azure Document Intelligence for HR policy ingestion, semantic chunking, and retrieval across policy PDFs, employee handbooks, and benefits guides. Implemented Semantic Kernel skills and plugins for live lookups against Azure SQL employee records, leave balances, and approval workflows, enabling personalized, grounded responses. Engineered few-shot prompts, system-level guardrails, and output-format constraints for compliant handling of sensitive HR data, and built analytics dashboards (resolution rate, escalation rate, latency, CSAT) to drive iterative prompt and retrieval improvements. Impact: reduced HR support tickets by 30%, improved first-response resolution by 40%, and enabled 24/7 automated employee self-service.",
        technologies: ["Azure OpenAI", "Semantic Kernel", "Microsoft Copilot", "Azure AI Search", "Azure Document Intelligence", "Azure SQL", "RAG"]
      },
      {
        title: "Senior Software Engineer",
        company: "NTT DATA Global Delivery Services",
        location: "Hyderabad, India",
        dates: "Jun 2017 - Dec 2021",
        description: "Built a full-stack retail analytics platform (Retail Store & Product Management System) with barcode-driven dashboards for store performance and sales analysis, using Python, FastAPI, REST APIs, JavaScript, HTML, CSS, and DevExpress. Developed scalable backend services against SQL databases for product, store, and sales transactions; designed and managed SQL databases, authored and optimized stored procedures, and tuned queries to improve application performance. Built ETL pipelines with Python and SQL Server (SSMS) for centralized data warehousing, reporting, and analytics, and managed deployments with SVN and IIS in an Agile team using Jira and Confluence.",
        technologies: ["Python", "FastAPI", "REST APIs", "SQL Server", "JavaScript", "DevExpress", "ETL"]
      }
      // Add more jobs as needed
    ]
  }
};

// Create context
const PortfolioContext = createContext<PortfolioData>(defaultPortfolioData);

// Provider component
export const PortfolioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // In a real application, you might fetch this data from an API or CMS
  const portfolioData = defaultPortfolioData;
  
  return (
    <PortfolioContext.Provider value={portfolioData}>
      {children}
    </PortfolioContext.Provider>
  );
};

// Custom hook to use the portfolio context
export const usePortfolio = () => useContext(PortfolioContext);