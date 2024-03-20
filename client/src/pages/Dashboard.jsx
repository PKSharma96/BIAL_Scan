import React from "react";
import { Header } from "./Header";
import "./Login.css";
import { Footer } from "./Footer";


export const Dashboard = () => {
  return (
    <>
    <Header />
    <main>
      <section className="section-login">
        <div className="container grid grid-center">
          <h2 className="login-heading">Dashboard</h2>
          <div className="logo-frame">
            
          </div>

        </div>
      </section>
    </main>
    <Footer />
    </>
  );
};
