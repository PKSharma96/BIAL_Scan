import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Staff } from "./pages/Staff";


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = { <Login /> } />
        <Route path="/dashboard" element = { <Dashboard /> } />
        <Route path="/staff" element = { <Staff /> } />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
