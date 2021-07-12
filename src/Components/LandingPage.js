import React from "react";

import "./styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landingpage-container">
      <section className="landingpage-intro">
        <h1>Find my Stuff</h1>
        <p>
          Having troubles keeping track of that piece of item that you can't
          carry around.
        </p>
        <p>
          This item can't be misplaced, but is rarely used yet important, it
          could be your certificates, the key to your box of keepsakes kept away
          in the attic, or that birthday gift that has no use yet.
        </p>
        <p>These items can get easily misplaced if not tracked.</p>
        <p className="landingpage-para">
          These app can help you track them, acting as your item butler, ready
          for you when the time comes, only thing you need to do, is
          <span> ask!</span>
          <section className="landingpage-logsign">
            <button className="landingpage-login">Login</button>
            <button className="landingpage-signup">Signup</button>
          </section>
        </p>
      </section>
    </div>
  );
};

export default LandingPage;
