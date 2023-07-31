import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Home from "./Home.jsx";

const SinglePage = () => {
  const [lazyComponents, setLazyComponents] = useState({});
  const [shouldAnimate, setShouldAnimate] = useState(false);

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
                import("./Game.jsx").then((module) => {
                  setLazyComponents((prevComponents) => ({
                    ...prevComponents,
                    game: module.default,
                  }));
                });
                break;
              case "web":
                import("./Web.jsx").then((module) => {
                  setLazyComponents((prevComponents) => ({
                    ...prevComponents,
                    web: module.default,
                  }));
                });
                break;
              case "about":
                import("./About.jsx").then((module) => {
                  setLazyComponents((prevComponents) => ({
                    ...prevComponents,
                    about: module.default,
                  }));
                });
                break;
              case "contact":
                import("./Contact.jsx").then((module) => {
                  setLazyComponents((prevComponents) => ({
                    ...prevComponents,
                    contact: module.default,
                  }));
                });
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
        threshold: .8,
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

  useEffect(() => {
    // Introduce a delay before triggering initial animation
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 300);

    return () => clearTimeout(timer);
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
