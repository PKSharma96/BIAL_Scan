import React, { useState } from 'react';
import { BarcodeScanner } from './BarcodeScanner';
import { Footer } from './Footer';
import { Header } from './Header';

export const BarcodeScannerPage = () => {
  const [scannedCode, setScannedCode] = useState('');

  const handleScan = (code) => {
    setScannedCode(code);
    // Do something with the scanned code, e.g., send it to an API
  };

  return (
    <>
    <Header />
    <main>
      <section className="section-login">      
        <div className="container grid grid-center">
          <div className="logo-container">
              <img src="/photos/main_logo.png" alt="Logo" />
          </div>
          <h1 className="login-heading">Barcode Scanner Page</h1>
          <BarcodeScanner onScan={handleScan} />
          {scannedCode && <p>Scanned Code: {scannedCode} </p>}
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
};