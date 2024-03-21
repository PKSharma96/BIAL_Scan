import React, { useState } from 'react';
import BarcodeScanner from './BarcodeScanner'; // Update import statement

export const BarcodeScannerPage = () => {
  const [scannedCode, setScannedCode] = useState('');

  const handleScan = (code) => {
    setScannedCode(code);
    // Do something with the scanned code, e.g., send it to an API
  };

  return (
    <div>
      <h1>Barcode Scanner Page</h1>
      <BarcodeScanner onScan={handleScan} />
      {scannedCode && <p>Scanned Code: {scannedCode} </p>}
    </div>
  );
};