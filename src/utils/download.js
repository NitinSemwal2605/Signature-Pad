export const downloadImage = (canvas, format, filename) => {
  const dataUrl = canvas.toDataURL(format);
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  link.click();
};

import { jsPDF } from 'jspdf';

export const downloadPDF = (canvas) => {
  const doc = new jsPDF();

  const imgData = canvas.toDataURL('image/png');
  
  doc.addImage(imgData, 'PNG', 10, 10, 180, 160); 

  doc.save('signature.pdf');
};
