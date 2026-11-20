import { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Degrees from './components/Degrees';
import Experience from './components/Experience';
import Projects from './components/Projects';
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
      <div className="relative min-h-screen bg-ivory text-charcoal overflow-x-hidden">
        {/* Grain overlay — subtle film texture across the entire viewport */}
        <div aria-hidden="true" className="fixed inset-0 -z-10 grain" />

        <Navbar onDownloadPDF={handleDownloadPDF} />

        <div ref={contentRef}>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Degrees />
          <Certifications />
          <Achievements />
        </div>

        <Contact />
        <Footer />
      </div>
    </PortfolioProvider>
  );
}

export default App;
