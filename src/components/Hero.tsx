import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownCircle } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const Hero: React.FC = () => {
  const { personalInfo } = usePortfolio();
  
  return (
    <section 
      id="hero" 
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-indigo-700"
      >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTJjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTEyLTE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
           {/* // <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"> */}
           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">

              {personalInfo.name || "John Doe"}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8">
              {personalInfo.tagline || "Frontend Developer & UX Designer"}
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-white text-primary-700 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Get In Touch
              </a>
              <a 
                href="#about" 
                className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
           <div className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
  <img 
    src={personalInfo.photoUrl || "..."} 
    alt={personalInfo.name || "Professional portrait"} 
    className="w-full h-full object-cover"
  />
</div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDownCircle className="w-6 h-6 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;