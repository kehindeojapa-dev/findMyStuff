import React from "react";

// Style
import "./styles/Signup.css";

// Import Component
import Footer from "./Footer";

const Signup = () => {
  return (
    <>
      <div className="signup-container">
        <section className="signup-grid">
          <div className="signup-grid-info">
            <h2>Find my Stuff</h2>
            <h3>
              Now you don't have to worry about misplacing your precious items
            </h3>
            <p>
              Let us help you make sure your item is never lost or forgotten.
            </p>
          </div>
          <div className="signup-grid-form">
            <form className="signup-form">
              <h1>Create your account</h1>
              <label htmlFor="name">Name</label>
              <input type="text" required autoComplete="name" />
              <label htmlFor="email">Email</label>
              <input type="email" required autoComplete="email" />
              <label htmlFor="password">Password</label>
              <input type="password" required minLength="6" />
              <input type="submit" value="Sign Up" />
              <p>
                Already have an account? <span>Login</span>
              </p>
            </form>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Signup;
