import { useRef } from 'react';
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
      <div className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden">
        {/* Site-wide ambient background */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-zinc bg-grid-md opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
          <div className="absolute inset-0 mesh-aurora opacity-80" />
        </div>

        <Navbar onDownloadPDF={handleDownloadPDF} />

        <div ref={contentRef}>
          <Hero />
          <About />
          <Experience />
          <Achievements />
          <Certifications />
          <Degrees />
        </div>

        <Contact />
        <Footer />
      </div>
    </PortfolioProvider>
  );
}

export default App;
