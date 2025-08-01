import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';

const About: React.FC = () => {
  const { about } = usePortfolio();
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {about.bio || `I am a passionate professional with extensive experience in web development and design. 
              I specialize in creating clean, efficient, and user-friendly applications that solve real-world problems. 
              My approach combines technical expertise with creative problem-solving to deliver outstanding results for my clients.
              
              With a background in both front-end and back-end development, I bring a holistic perspective to every project. 
              I'm constantly learning and exploring new technologies to stay at the forefront of the rapidly evolving tech landscape.`}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
            Outside of work, I invest in my personal well-being and creativity. I read, write, meditate, freestyle dance, and immerse myself in nature to stay balanced and inspired.
            </p>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Skills & Expertise</h3>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {(about.skills || [
                "JavaScript / TypeScript",
                "React & Next.js",
                "Node.js",
                "HTML5 & CSS3",
                "UI/UX Design",
                "Responsive Web Design",
                "API Development",
                "Database Design",
                "Cloud Services (AWS, Azure)",
                "Performance Optimization"
              ]).map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center"
                  variants={item}
                >
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;