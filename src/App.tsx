import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Degrees from './components/Degrees';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { PortfolioProvider } from './context/PortfolioContext';
import { generatePDF } from './utils/pdfGenerator';

function App() {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = () => {
    if (contentRef.current) {
      generatePDF(contentRef.current);
    }
  };

  return (
    <PortfolioProvider>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Navbar onDownloadPDF={handleDownloadPDF} />
        
        <div ref={contentRef}>
          <Hero />
          <About />
          <Achievements />
          <Certifications />
          <Degrees />
          <Experience />
        </div>
        
        <Contact />
        <Footer />
      </div>
    </PortfolioProvider>
  );
}

export default App;