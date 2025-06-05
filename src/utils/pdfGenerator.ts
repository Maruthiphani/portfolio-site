import html2pdf from 'html2pdf.js';

export const generatePDF = (element: HTMLElement) => {
  // Remove elements that shouldn't be in the PDF (like the contact form)
  const contactSection = element.querySelector('#contact');
  const footer = element.querySelector('footer');
  
  if (contactSection) {
    contactSection.classList.add('hidden');
  }
  
  if (footer) {
    footer.classList.add('hidden');
  }
  
  const opt = {
    margin: 10,
    filename: 'portfolio.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  
  // Generate the PDF
  html2pdf()
    .set(opt)
    .from(element)
    .save()
    .then(() => {
      // Restore elements visibility after PDF generation
      if (contactSection) {
        contactSection.classList.remove('hidden');
      }
      
      if (footer) {
        footer.classList.remove('hidden');
      }
    });
};