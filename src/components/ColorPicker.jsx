const ColorPicker = ({ value, onChange }) => {
  const colors = ['#000000', '#FF0000', '#0000FF', '#008000'];

  return (
    <div className="flex gap-2 items-center mb-4">
      <span className="text-gray-700">Pen Color:</span>
      <div className="flex gap-2">
        {colors.map((color) => (
          <button
            key={color}
            className={`w-8 h-8 rounded-full border-2 ${
              color === value ? 'border-gray-500' : 'border-gray-200'
            }`}
            style={{ backgroundColor: color }}
            onClick={() => onChange(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;