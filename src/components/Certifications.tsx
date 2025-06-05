import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const Certifications: React.FC = () => {
  const { certifications } = usePortfolio();
  
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-secondary-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(certifications.items || [
            {
              name: "AWS Certified Solutions Architect",
              issuer: "Amazon Web Services",
              date: "November 2023",
              logo: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
              name: "Certified Scrum Master (CSM)",
              issuer: "Scrum Alliance",
              date: "August 2023",
              logo: "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
              name: "Google Professional Cloud Developer",
              issuer: "Google Cloud",
              date: "May 2023",
              logo: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
              name: "Microsoft Certified: Azure Developer Associate",
              issuer: "Microsoft",
              date: "January 2023",
              logo: "https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
              name: "React.js Certification",
              issuer: "Meta",
              date: "October 2022",
              logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
              name: "Professional Agile Leadership (PAL)",
              issuer: "Scrum.org",
              date: "July 2022",
              logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
          ]).map((certification, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={certification.logo} 
                  alt={certification.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{certification.name}</h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <Award className="w-4 h-4 mr-2" />
                  <span>{certification.issuer}</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{certification.date}</span>
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