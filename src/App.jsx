import { useRef, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast'; // Import Toaster and toast from react-hot-toast
import ColorPicker from './components/ColorPicker';
import DownloadButtons from './components/DownloadButtons';
import SignaturePad from './components/SignaturePad';
import SizeSlider from './components/SizeSlider';
import { downloadImage, downloadPDF } from './utils/download';

function App() {
  const sigPadRef = useRef(null);
  const [isEmpty, setIsEmpty] = useState(true);
  const [penColor, setPenColor] = useState('#000000');
  const [penSize, setPenSize] = useState(2);

  const clear = () => {
    sigPadRef.current.clear();
    setIsEmpty(true);
  };

  const handleDownload = (format, filename) => {
    if (isEmpty) {
      toast.error('Please sign before downloading', {
        position: 'top-center',  // Optional position
      });
      return;
    }
    const canvas = sigPadRef.current.getCanvas();
    downloadImage(canvas, format, filename);
    toast.success(`${filename} downloaded successfully!`, {
      position: 'top-center',  // Optional position
    });
  };

  const downloadAsPNG = () => handleDownload('image/png', 'signature.png');
  const downloadAsJPG = () => handleDownload('image/jpeg', 'signature.jpg');
  const downloadAsPDF = () => {
    if (isEmpty) {
      toast.error('Please sign before downloading', {
        position: 'top-center',
      });
      return;
    }
    const canvas = sigPadRef.current.getCanvas(); // Get the canvas
    downloadPDF(canvas); 
    toast.success('PDF downloaded successfully!', {
      position: 'top-center',
    });
  };
  

  const downloadAsTransparentPNG = () => {
    if (isEmpty) {
      toast.error('Please sign before downloading', {
        position: 'top-center',
      });
      return;
    }
    const canvas = sigPadRef.current.getCanvas();
    downloadImage(canvas, 'image/png', 'signature-transparent.png');
    toast.success('Transparent PNG downloaded successfully!', {
      position: 'top-center',
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            SignShare - A Signature Pad
          </h1>

          <div className="mb-6">
            <ColorPicker value={penColor} onChange={setPenColor} />
            <SizeSlider value={penSize} onChange={setPenSize} />
          </div>

          <SignaturePad
            ref={sigPadRef}
            onBegin={() => setIsEmpty(false)}
            penColor={penColor}
            penSize={penSize}
          />

          <DownloadButtons
            onClear={clear}
            onDownloadPNG={downloadAsPNG}
            onDownloadJPG={downloadAsJPG}
            onDownloadPDF={downloadAsPDF}
            onDownloadTransparentPNG={downloadAsTransparentPNG}
          />
        </div>
      </div>

      {/* Toast Container */}
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
