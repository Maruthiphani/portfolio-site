import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const Degrees: React.FC = () => {
  const { education } = usePortfolio();
  
  return (
    <section id="degrees" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            My academic background and formal education that have shaped my professional journey.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {(education.degrees || [
            {
              institution: "Stanford University",
              degree: "Master of Science in Computer Science",
              year: "2018 - 2020",
              description: "Specialized in Artificial Intelligence and Machine Learning. Completed thesis on 'Optimizing Neural Networks for Edge Computing Applications'.",
              logo: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
              institution: "University of California, Berkeley",
              degree: "Bachelor of Science in Computer Engineering",
              year: "2014 - 2018",
              description: "Graduated with honors. Active member of the Engineering Society and participated in multiple hackathons, winning the Grand Prize in 2017.",
              logo: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
              institution: "Harvard Business School",
              degree: "Executive Education: Leadership Development",
              year: "2022",
              description: "Intensive program focused on strategic leadership, team management, and organizational behavior in technology companies.",
              logo: "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
          ]).map((degree, index) => (
            <motion.div
              key={index}
              className="mb-10 last:mb-0 bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img 
                    className="h-48 w-full md:w-48 object-cover" 
                    src={degree.logo} 
                    alt={degree.institution} 
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center">
                    <h3 className="text-xl font-semibold text-gray-900">{degree.degree}</h3>
                  </div>
                  <div className="mt-2 flex items-center text-gray-600">
                    <Building2 className="w-4 h-4 mr-2" />
                    <span>{degree.institution}</span>
                  </div>
                  <div className="mt-1 flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{degree.year}</span>
                  </div>
                  <p className="mt-4 text-gray-700">
                    {degree.description}
                  </p>
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