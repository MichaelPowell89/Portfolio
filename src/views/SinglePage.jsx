import React from "react";
import Home from "./Home.jsx";
import Game from "./Game.jsx";
import Web from "./Web.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";

const SinglePage = () => {
  return (
    <>
      <section id="home" style={{ height: "100vh" }}>
        <Home />
      </section>
      <section id="game" className="backgroundVariant">
        <Game />
      </section>
      <section id="web">
        <Web />
      </section>
      <section id="about" className="backgroundVariant">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default SinglePage;
