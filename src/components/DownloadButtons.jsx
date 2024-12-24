const DownloadButtons = ({ onClear, onDownloadPNG, onDownloadJPG, onDownloadPDF, onDownloadTransparentPNG }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <button
        onClick={onClear}
        className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
      >
        Clear
      </button>
      <button
        onClick={onDownloadPNG}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Download PNG
      </button>
      <button
        onClick={onDownloadJPG}
        className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
      >
        Download JPG
      </button>
      <button
        onClick={onDownloadPDF}
        className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors"
      >
        Download PDF
      </button>
      <button
        onClick={onDownloadTransparentPNG}
        className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition-colors"
      >
        Download Transparent PNG
      </button>
    </div>
  );
};

export default DownloadButtons;