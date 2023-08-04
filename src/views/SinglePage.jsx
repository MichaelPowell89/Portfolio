import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Home from "./Home.jsx";
import Game from "./Game.jsx";
import Web from "./Web.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";

const SinglePage = () => {
  const mobile = window.innerWidth < 992;
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Introduce a delay before triggering initial animation
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const [lazyComponents, setLazyComponents] = useState({
    game: null,
    web: null,
    about: null,
    contact: null,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id");
            switch (sectionId) {
              case "home":
                break;
              case "game":
                setLazyComponents((prevComponents) => ({
                  ...prevComponents,
                  game: Game,
                }));
                break;
              case "web":
                setLazyComponents((prevComponents) => ({
                  ...prevComponents,
                  web: Web,
                }));
                break;
              case "about":
                setLazyComponents((prevComponents) => ({
                  ...prevComponents,
                  about: About,
                }));
                break;
              case "contact":
                setLazyComponents((prevComponents) => ({
                  ...prevComponents,
                  contact: Contact,
                }));
                break;
              default:
                break;
            }
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.8,
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

  const renderLazyComponent = (Component, slideFromLeft) => {
    const enterClass = slideFromLeft ? "slide-enter-left" : "slide-enter";
    const enterActiveClass = slideFromLeft
      ? "slide-enter-active-left"
      : "slide-enter-active";

    return (
      <CSSTransition
        in={!!Component}
        timeout={500}
        classNames={{ enter: enterClass, enterActive: enterActiveClass }}
      >
        <div>
          {Component ? <Component /> : null}
        </div>
      </CSSTransition>
    );
  };

  return (
    <>
      <section id="home" style={{ height: "100vh" }}>
        <Home />
      </section>
      <section id="game" className={`backgroundVariant slide-in`}>
        {renderLazyComponent(lazyComponents.game)}
      </section>
      <section id="web">
        {renderLazyComponent(lazyComponents.web, true)}
      </section>
      <section id="about" className={`backgroundVariant slide-in`}>
        {renderLazyComponent(lazyComponents.about)}
      </section>
      <section id="contact">
        {renderLazyComponent(lazyComponents.contact, true)}
      </section>
    </>
  );
};

export default SinglePage;
