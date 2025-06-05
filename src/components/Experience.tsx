import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const Experience: React.FC = () => {
  const { experience } = usePortfolio();
  
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            My professional journey and career milestones that have shaped my expertise.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gray-300"></div>
          
          {(experience.jobs || [
            {
              title: "Senior Frontend Developer",
              company: "TechCorp Inc.",
              location: "San Francisco, CA",
              dates: "January 2022 - Present",
              description: "Lead a team of 5 developers in building and maintaining enterprise-level web applications. Spearheaded the migration from legacy code to a modern React-based architecture, resulting in a 40% improvement in performance and user experience. Implemented CI/CD pipelines and automated testing, reducing deployment time by 60%.",
              technologies: ["React", "TypeScript", "Redux", "Node.js", "GraphQL"]
            },
            {
              title: "Frontend Developer",
              company: "InnovateSoft",
              location: "Austin, TX",
              dates: "March 2020 - December 2021",
              description: "Developed responsive and accessible web applications for clients across various industries. Collaborated with designers and backend developers to implement new features and improve existing functionality. Optimized application performance and ensured cross-browser compatibility.",
              technologies: ["JavaScript", "React", "Vue.js", "SASS", "REST APIs"]
            },
            {
              title: "Web Developer",
              company: "CreativeDigital",
              location: "Seattle, WA",
              dates: "June 2018 - February 2020",
              description: "Built and maintained websites for small to medium-sized businesses. Worked directly with clients to understand requirements and implement solutions that met their business needs. Created custom WordPress themes and plugins to enhance site functionality.",
              technologies: ["HTML/CSS", "JavaScript", "PHP", "WordPress", "jQuery"]
            },
            {
              title: "Junior Developer",
              company: "StartupHub",
              location: "Boston, MA",
              dates: "January 2017 - May 2018",
              description: "Assisted in developing web applications for early-stage startups. Participated in agile development processes and contributed to code reviews. Implemented responsive designs and interactive UI components.",
              technologies: ["HTML/CSS", "JavaScript", "Bootstrap", "Git"]
            }
          ]).map((job, index) => (
            <motion.div 
              key={index}
              className={`relative mb-12 last:mb-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8 md:text-right'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {/* Timeline Dot */}
              <div className={`absolute top-0 ${
                index % 2 === 0 ? 'left-0 md:-left-3' : 'left-0 md:left-auto md:-right-3'
              } w-6 h-6 bg-accent-500 rounded-full border-4 border-white z-10`}></div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                <div className="flex items-center text-gray-700 mt-2">
                  <Briefcase className={`w-4 h-4 ${index % 2 === 1 ? 'md:order-2 md:ml-2' : 'mr-2'}`} />
                  <span>{job.company}</span>
                </div>
                <div className="flex items-center text-gray-600 mt-1">
                  <MapPin className={`w-4 h-4 ${index % 2 === 1 ? 'md:order-2 md:ml-2' : 'mr-2'}`} />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <Calendar className={`w-4 h-4 ${index % 2 === 1 ? 'md:order-2 md:ml-2' : 'mr-2'}`} />
                  <span>{job.dates}</span>
                </div>
                <p className={`mt-4 text-gray-700 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                  {job.description}
                </p>
                
                <div className={`mt-4 flex flex-wrap gap-2 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                  {job.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;