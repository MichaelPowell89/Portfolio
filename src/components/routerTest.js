import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "../views/Home"
import About from '../views/About';
import Contact from '../views/Contact';

function routerTest() {
	return (
		<div className="app">
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" exact component={About} />
					<Route path="/contact" exact component={Contact} />
				</Switch>
			</Router>
		</div>
	);
}

export default routerTest;
