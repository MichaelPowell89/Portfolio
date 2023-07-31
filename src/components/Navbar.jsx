import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import gameDesign from "../public/images/controller.png";
import webDesign from "../public/images/website.png";
import about from "../public/images/man.png";
import contact from "../public/images/email.png";
import linkedIn from "../public/images/linkedin.png";
import CV from "../public/Michael_Powell_CV_GameDesign.pdf";

const NavbarTest = () => {
  const [activeSection, setActiveSection] = useState(null);
  const mobile = window.innerWidth < 992;
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
    document.body.classList.toggle("navbar-open");
  };

  const handleRedirect = () => {
    if (mobile && open) setOpen(!open);
    const currentURL = window.location.href;

    if (currentURL.includes("404")) {
      window.location.href = "/portfolio";
    }
    console.log(window.location.href);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.9,
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
        <Navbar
          className="navbarMobile"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant={open ? "dark" : "light"}
        >
          <div
            className="menuOverlay"
            style={{ display: open ? "none" : "inherit" }}
          />
          <Container style={{ minHeight: "inherit", minWidth: "90vw" }}>
            <Navbar.Brand
              // onClick={handleRedirect}
              onClick={() => scrollToSection("home")}
              style={open ? { color: "#353535" } : { color: "white" }}
            >
              Michael Powell
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              style={{
                backgroundColor: open ? "black" : "rgba(255,255,255,.5",
              }}
              onClick={handleClick}
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link onClick={() => scrollToSection("game")}>
                  <img className="navbarLogo" src={gameDesign} alt="" />
                </Nav.Link>
                <Nav.Link onClick={() => scrollToSection("web")}>
                  <img className="navbarLogo" src={webDesign} alt="" />
                </Nav.Link>
                <Nav.Link onClick={() => scrollToSection("about")}>
                  <img className="navbarLogo" src={about} alt="" />
                </Nav.Link>
                <Nav.Link onClick={() => scrollToSection("contact")}>
                  <img className="navbarLogo" src={contact} alt="" />
                </Nav.Link>
                <Nav.Link href={CV} download>
                  <h1
                    className="CV navbarLogo"
                    style={{ color: open ? "#353535" : "white" }}
                  >
                    CV
                  </h1>
                </Nav.Link>
                <a href="https://www.linkedin.com/in/michael-powell-38870333">
                  <img
                    className="instagramLogo navbarLogo"
                    src={linkedIn}
                    alt=""
                  />
                </a>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar
          className="navbarDesktop"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant={open ? "dark" : "light"}
        >
          <div
            className="menuOverlay"
            style={{ display: open ? "none" : "inherit" }}
          />
          <Navbar.Brand
            // onClick={handleRedirect}
            onClick={() => scrollToSection("home")}
            style={open ? { color: "#353535" } : { color: "white" }}
          >
            Michael Powell
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ backgroundColor: open ? "black" : "rgba(255,255,255,.5" }}
            onClick={handleClick}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                height: "60vh",
              }}
            >
              <Nav.Link
                onClick={() => scrollToSection("game")}
                className={activeSection === "game" ? "active" : ""}
              >
                <img className="navbarLogo" src={gameDesign} alt="" />
              </Nav.Link>
              <div className="navbar-divider" />
              <Nav.Link
                onClick={() => scrollToSection("web")}
                className={activeSection === "web" ? "active" : ""}
              >
                <img className="navbarLogo" src={webDesign} alt="" />
              </Nav.Link>
              <div className="navbar-divider" />
              <Nav.Link
                onClick={() => scrollToSection("about")}
                className={activeSection === "about" ? "active" : ""}
              >
                <img className="navbarLogo" src={about} alt="" />
              </Nav.Link>
              <div className="navbar-divider" />
              <Nav.Link
                onClick={() => scrollToSection("contact")}
                className={activeSection === "contact" ? "active" : ""}
              >
                <img className="navbarLogo" src={contact} alt="" />
              </Nav.Link>
              <div className="navbar-divider" />
              <Nav.Link href={CV} download style={{opacity: "100%"}}>
                <h1
                  className="CV navbarLogo"
                  style={{ color: open ? "#353535" : "white"}}
                >
                  CV
                </h1>
              </Nav.Link>
              <div className="navbar-divider" />
              <a target="_blank" href="https://www.linkedin.com/in/michael-powell-38870333"
              >
                <img
                  className="instagramLogo navbarLogo"
                  src={linkedIn}
                  alt=""
                />
              </a>
            </Nav>
          </Navbar.Collapse>
          {/* </div> */}
        </Navbar>
      )}
    </>
  );
};

export default NavbarTest;
