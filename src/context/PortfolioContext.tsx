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
    tagline: "Software Engineer | AI Enthusiastic",
    photoUrl: "http://i.imgur.com/DrYFhCD.jpeg"//"https://i.imgur.com/3cZCvTE.jpeg"
  },
  about: {
    bio: `I'm a passionate Software Engineer with solid expertise in full-stack web development — building responsive frontends, robust backends, and seamless middleware integrations. I thrive on solving complex problems and continuously seek out new technologies to stay ahead in this ever-evolving field. My interest in Artificial Intelligence fuels my creativity, and I enjoy developing intelligent agents, integrating AI into real-world applications, and staying updated on the latest trends. What drives me is the excitement of turning ideas into impactful solution.
          
          My approach to work is grounded in discipline, commitment, determination, and humility. I value continuous learning and take pride in writing clean, scalable code while collaborating effectively with cross-functional teams. What sets me apart is my blend of technical depth, curiosity, and a mindful, user-centric perspective.`,
    skills: [
      "Python",
      "Java",
      "C#",
      "ASP.net MVC core",
      "RestFul API",
      "React",
      "Tailwind",
      "LLM integration",
      "AI agents",
      "SQl",
      "Prostgres",
      "Backend API"
    ]
  },
  achievements: {
    items: [
      {
        title: "Achievement 1",
        description: "Participated in Hackathon conducted by Microsoft.",
        year: "2025",
        icon: "Digital Certificate"
      },
      {
        title: "Achievement 2",
        description: "Participated in Hackathon organised by Preplexity AI.",
        year: "2024",
        icon: "Digital Certificate"
      }
      // Add more achievements as needed
    ]
  },
  certifications: {
    items: [
      {
        name: "Certification 1",
        issuer: "Google AI Essentails from Google",
        date: "01 2025",
        logo: "https://i.imgur.com/O14Xgkg.jpeg"
      },
      {
        name: "Certification 2",
        issuer: "Machine Learning Specialization from Deep Learning & Stanford University",
        date: "01 2025",
        logo: "https://i.imgur.com/o7RrSLl.jpeg"  
      },
      {
        name: "Certification 3",
        issuer: "Microsoft Azure AI Fundamentals from Microsoft",
        date: "07 2024",
        logo: "https://i.imgur.com/2msoQFQ.jpeg"  
      }
      // Add more certifications as needed
    ]
  },
  education: {
    degrees: [
      {
        institution: "University of Missouri - Kansas City",
        degree: "Masters",
        year: "2022 - 2023",
        description: "Earned a Master's degree in Computer Science with a 3.57 GPA.",
        logo: "https://i.imgur.com/AHQ0qyC.jpeg"
      }
      // Add more degrees as needed
    ]
  },
  experience: {
    jobs: [
      {
        title: "Senior Software Engineer",
        company: "NTT Data",
        location: "Hyderabad, India",
        dates: "2018 - 2021",
        description: "Designed and developed scalable web and console applications using ASP.NET Core, MVC, Web API, C#, SQL, and Entity Framework, focusing on performance, clean architecture, and business-driven solutions.Built responsive UIs with HTML, CSS, JavaScript, AngularJS, and DevExpress, while ensuring efficient database management, API integration, and end-to-end troubleshooting.",
        technologies: ["Asp.net MVC Core", "RestFul API", "SQl", "Javascript"]
      },
      {
        title: "Software Engineer Consultant",
        company: "Gyansys",
        location: "Carmel, USA",
        dates: "2023 - 2024",
        description: "As a Software Engineer, I develop full-stack solutions—from React-based UIs to backend microservices and data pipelines with Azure Data Factory—while integrating AI agents using OpenAI, LangChain, and LLMs to enhance automation and intelligence.I specialize in building AI-driven features with RAG architecture and vector databases, alongside Web API integration, e-commerce optimization, and Agile delivery using Azure DevOps and Git.",
        technologies: ["React", "Azure", "RAG,", "LLM", "Vector database"]
      },
      {
        title: "Software Engineer",
        company: "HCL Tech America",
        location: "Virginia, USA(Remote)",
        dates: "2025 - Current",
        description: "As a developer, I work on enabling Microsoft Teams functionalities by developing solutions using Python, Flask, and CSS. I’m responsible for building admin access controls for users, contributing to significant project improvements that led to a 15% increase in sales.",
        technologies: ["Python", "BackendAPI", "SOAP"]
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