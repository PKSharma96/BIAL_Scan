import { FaUser, FaMapMarkerAlt, FaLock } from "react-icons/fa";
import "./Login.css";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import { Footer } from "./Footer";
import { Staff } from "./Staff";

export const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); 
    if (username !== "" && password !== "") {
      navigate("/staff");
    }
  };
  const [currentLocation, setCurrentLocation] = useState('');

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
        },
        (error) => {
          console.error('Error getting geolocation:', error);
          setCurrentLocation('Unable to retrieve location');
        }
      );
    } else {
      setCurrentLocation('Geolocation is not supported by this browser.');
    }
  };

  return (
    <>
      <Header />
      <main>
        <section className="section-login">
          <div className="container grid grid-center">
            <h2 className="login-heading">Passenger Reconciliation System</h2>
            <div className="login-form">
              <h2>Login</h2>
              <form onSubmit={handleLogin}>
                <div className="input-group">
                  <span><FaUser /></span>
                  <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input-group">
                  <span><FaLock /></span>
                  <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input-group">
                  <span><FaMapMarkerAlt /></span>
                  <input type="text" placeholder="Location" value={currentLocation} />
                  <div className="btn-loc">
                    <button onClick={getLocation}>Get</button>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};
