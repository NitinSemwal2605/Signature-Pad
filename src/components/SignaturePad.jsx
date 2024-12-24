import { forwardRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const SignaturePad = forwardRef(({ onBegin, penColor, penSize }, ref) => {
  return (
    <div className="border-2 border-gray-300 rounded-lg mb-6">
      <SignatureCanvas
        ref={ref}
        canvasProps={{
          className: 'w-full h-64'
        }}
        onBegin={onBegin}
        penColor={penColor}
        dotSize={penSize}
        minWidth={penSize}
        maxWidth={penSize}
      />
    </div>
  );
})

export default SignaturePad;