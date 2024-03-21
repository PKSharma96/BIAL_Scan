import React, { useRef, useEffect } from 'react';
import Quagga from 'quagga';

export const BarcodeScanner = ({ onScan }) => {
  const videoRef = useRef();

  useEffect(() => {
    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: videoRef.current,
        constraints: {
          width: 480,
          height: 320,
          facingMode: "environment" // or "user" for front camera
        },
      },
      decoder: {
        readers: ["ean_reader"]
      },
    }, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      Quagga.start();
      Quagga.onDetected(handleScan);
    });

    return () => {
      Quagga.stop();
    };
  }, []);

  const handleScan = (result) => {
    if (result && result.codeResult) {
      onScan(result.codeResult.code);
    }
  };

  return (
    <div>
      <video ref={videoRef} className="video"></video>
    </div>
  );
};
