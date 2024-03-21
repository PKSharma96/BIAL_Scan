import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Staff } from "./pages/Staff";
import { BarcodeScannerPage } from "./pages/BarcodeScannerPage";
import { Passenger } from "./pages/Passenger";


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = { <Login /> } />
        <Route path="/dashboard" element = { <Dashboard /> } />
        <Route path="/staff" element = { <Staff /> } />
        <Route path="/scanner" element = { <BarcodeScannerPage />} />
        <Route path="/passenger" element = { <Passenger />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
