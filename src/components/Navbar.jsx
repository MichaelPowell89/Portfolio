import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import gameDesign from "../public/images/controller.png";
import webDesign from "../public/images/website.png";
import about from "../public/images/man.png";
import contact from "../public/images/email.png";
import linkedIn from "../public/images/linkedin.png";
import CV from "../public/Michael_Powell_CV_GameDesign.pdf";

const NavbarTest = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
    document.body.classList.toggle("navbar-open");
  };

  const handleRedirect = () => {
	const currentURL = window.location.href;
	
	if (currentURL.includes("404"))
	{
		window.location.href = "/portfolio"
	}
    console.log(window.location.href);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant={open ? "dark" : "light"}
    >
      <div
        className="menuOverlay"
        style={{ display: open ? "none" : "inherit" }}
      />
      <Container style={{ minHeight: "inherit" }}>
        <Navbar.Brand
          onClick={handleRedirect}
		  href="#home"
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
          <Nav>
            <Nav.Link href="#game">
              <img className="navbarLogo" src={gameDesign} alt="" />
            </Nav.Link>
            <Nav.Link href="#web">
              <img className="navbarLogo" src={webDesign} alt="" />
            </Nav.Link>
            <Nav.Link href="#about">
              <img className="navbarLogo" src={about} alt="" />
            </Nav.Link>
            <Nav.Link href="#contact">
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
              <img className="instagramLogo navbarLogo" src={linkedIn} alt="" />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarTest;
