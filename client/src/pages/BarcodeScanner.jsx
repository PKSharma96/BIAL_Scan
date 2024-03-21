import React, { useRef, useEffect, useState, useCallback } from 'react';
import Quagga from "quagga";
import { useNavigate } from "react-router-dom";

export const BarcodeScanner = ({ onScan }) => {
  const videoRef = useRef();
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [detectedBarcode, setDetectedBarcode] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); 
    navigate("/passenger");
  };

  useEffect(() => {
    const requestCameraPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true});
        setPermissionGranted(true);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    requestCameraPermission();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleScan = useCallback((data) => {
    if (data.codeResult) {
      setDetectedBarcode(data.codeResult.code);
      onScan(data.codeResult.code);
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
          }
        },
        decoder: {
          readers: ["ean_reader"]
        }
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
        <>
        <div className='login-form'>
          
          <video ref={videoRef} className="video" autoPlay playsInline></video>
          <button onClick={handleLogin}> Submit </button>
          {detectedBarcode && (
            <div className="barcode-overlay">
              <p>Detected Barcode:</p>
              <p>{detectedBarcode}</p>
              {/* Add rectangle here to track barcode */}
            
            </div>
            
          )}
        </div>  
        </>
      ) : (
        <p>Please grant camera access to scan barcodes</p>
      )}
    </div>
  );
};