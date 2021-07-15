import React from "react";

// Style
import "./styles/Login.css";

// Import Component
import Footer from "./Footer";

const Login = () => {
  return (
    <>
      <section className="login-container">
        <section className="login-grid">
          <div className="login-grid-form">
            <form className="login-form">
              <label htmlFor="email">Email</label>
              <input type="email" required autoComplete="email" />
              <label htmlFor="password">Password</label>
              <input type="password" required />
              <input type="submit" value="Login" />
              <p>
                Don't have an account? <span>Sign Up</span>
              </p>
            </form>
          </div>
          <div className="login-grid-info">
            <h2>Find my Stuff</h2>
            <h3>
              Welcome back, login to view your tracked item and add that new
              item you find hard to keep around.
            </h3>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Login;
