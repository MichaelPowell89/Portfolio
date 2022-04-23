import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container} from 'react-bootstrap';
import gameDesign from "../public/images/controller.png"
// import webDesign from "../public/images/website.png"
import about from "../public/images/man.png"
import contact from "../public/images/email.png"
import linkedIn from "../public/images/linkedin.png"

const NavbarTest = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="/portfolio_github/">Michael Powell</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
					</Nav>
					<Nav>
						<Nav.Link href="/portfolio_github/gamedesign"><img className="navbarLogo" src={gameDesign} alt=""/></Nav.Link>
						{/* <Nav.Link href="/portfolio_github/webdesign"><img className="navbarLogo" src={webDesign} alt=""/></Nav.Link> */}
						<Nav.Link href="/portfolio_github/about"><img className="navbarLogo" src={about} alt=""/></Nav.Link>
						<Nav.Link href="/portfolio_github/contact"><img className="navbarLogo" src={contact} alt=""/></Nav.Link>
						<Nav.Link href="https://www.linkedin.com/in/michael-powell-38870333"><img className="navbarLogo" src={linkedIn} alt=""/></Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarTest;
