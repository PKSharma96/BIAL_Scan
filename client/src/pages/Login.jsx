import { FaUser, FaMapMarkerAlt, FaLock } from "react-icons/fa";
import "./Login.css";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import { Footer } from "./Footer";
//import { Staff } from "./Staff";

export const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); 
    if (username !== "" && password !== "") {
      navigate("/scanner");
    }
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
