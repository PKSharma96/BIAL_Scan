import React, { useRef, useEffect, useState, useCallback } from 'react';
import Quagga from 'quagga';

export const BarcodeScanner = ({ onScan }) => {
  const videoRef = useRef();
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    const requestCameraPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setPermissionGranted(true);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    requestCameraPermission();

    // Copy ref value to a variable for cleanup
    let currentVideoRef = videoRef.current;

    return () => {
      if (currentVideoRef && currentVideoRef.srcObject) {
        currentVideoRef.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleScan = useCallback((result) => {
    if (result && result.codeResult) {
      onScan(result.codeResult.code);
    }
  }, [onScan]);

  useEffect(() => {
    if (permissionGranted && videoRef.current) {
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
    }
  }, [permissionGranted, handleScan]);
  
  return (
    <div className="barcode-scanner">
      {permissionGranted ? (
        <video ref={videoRef} className="video" autoPlay playsInline></video>
      ) : (
        <p>Please grant camera access to scan barcodes</p>
      )}
    </div>
  );
};

export default BarcodeScanner;
