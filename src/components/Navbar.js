import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<nav className="navbar">
			<Link to="/" className="nav-logo">
				Michael Powell
			</Link>
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to="/about" className="nav-link" onClick={closeMenu}>
						<img className="navbarLogo" src="../images/man.png"/>
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/contact" className="nav-link" onClick={closeMenu}>
						<img className="navbarLogo" src="../images/email.png"/>
					</Link>
				</li>
				<li className="nav-item">
					<Link to="https://www.linkedin.com/in/michael-powell-38870333" className="nav-link" onClick={closeMenu}>
						<img className="navbarLogo" src="../images/linkedin.png"/>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;