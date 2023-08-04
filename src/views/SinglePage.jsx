import React, { useEffect, useState } from "react";
import Home from "./Home.jsx";
import Game from "./Game.jsx";
import Web from "./Web.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";

const SinglePage = () => {
  const mobile = window.innerWidth < 992;

  const sectionComponents = {
    game: Game,
    web: Web,
    about: About,
    contact: Contact,
  };

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id");
            setTimeout(() => {
              setActiveSection(sectionId);
            }, 500); 
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      {mobile ? (
        <>
          <section id="home" style={{ height: "100vh" }}>
            <Home />
          </section>
          <section id="game" className={`backgroundVariant`}>
              <Game />
          </section>
          <section id="web">
              <Web />
          </section>
          <section id="about" className={`backgroundVariant`}>
              <About />
          </section>
          <section id="contact">
              <Contact />
          </section>
        </>
      ) : (
        <>
          <section id="home" style={{ height: "100vh" }}>
            <Home />
          </section>
          <section id="game" className={`backgroundVariant`}>
            <div
              className={`offScreenRight ${
                activeSection === "game" ? "inFocus" : ""
              }`}
              style={{ transition: "transform 500ms ease-in-out" }}
            >
              <Game />
            </div>
          </section>
          <section id="web">
            <div
              className={`offScreenLeft ${
                activeSection === "web" ? "inFocus" : ""
              }`}
              style={{ transition: "transform 500ms ease-in-out" }}
            >
              <Web />
            </div>
          </section>
          <section id="about" className={`backgroundVariant`}>
            <div
              className={`offScreenRight ${
                activeSection === "about" ? "inFocus" : ""
              }`}
              style={{ transition: "transform 500ms ease-in-out" }}
            >
              <About />
            </div>
          </section>
          <section id="contact">
            <div
              className={`offScreenLeft ${
                activeSection === "contact" ? "inFocus" : ""
              }`}
              style={{ transition: "transform 500ms ease-in-out" }}
            >
              <Contact />
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default SinglePage;
