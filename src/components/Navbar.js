import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container} from 'react-bootstrap';

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
				<Navbar.Brand href="/">Michael Powell</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
					</Nav>
					<Nav>
						<Nav.Link href="/gamedesign"><img className="navbarLogo" src="../images/controller.png" alt=""/></Nav.Link>
						<Nav.Link href="/webdesign"><img className="navbarLogo" src="../images/website.png" alt=""/></Nav.Link>
						<Nav.Link href="/about"><img className="navbarLogo" src="../images/man.png" alt=""/></Nav.Link>
						<Nav.Link href="/contact"><img className="navbarLogo" src="../images/email.png" alt=""/></Nav.Link>
						<Nav.Link href="https://www.linkedin.com/in/michael-powell-38870333"><img className="navbarLogo" src="../images/linkedin.png" alt=""/></Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarTest;