import "./Login.css";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
//import { Staff } from "./Staff";

export const Passenger = () => {

  const navigate = useNavigate();
  const handleProceed = (event) => {
    event.preventDefault(); 
    navigate("/staff");
  };

  const handleCancel = (event) =>{
    event.preventDefault();
    navigate("/scanner")
  }

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
                <h1>Passenger Details</h1>

            <button onClick={handleProceed}> Proceed </button>
            <br/>
            
            <button onClick={handleCancel}> Cancel </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};
