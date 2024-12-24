const SizeSlider = ({ value, onChange }) => {
  return (
    <div className="flex gap-2 items-center mb-4">
      <span className="text-gray-700">Pen Size:</span>
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-32"
      />
      <span className="text-gray-500 w-8">{value}px</span>
    </div>
  );
};

export default SizeSlider;