import React from "react";
//import Header from "./components/Header"
import Footer from "./components/Footer"
//import Content from "./components/Content"
//import workExamples from "./workExamples"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./views/Home"
import About from './views/About';
import Contact from './views/Contact';

function App() {
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
      <Footer />
      </div>
  );
}

export default App;
