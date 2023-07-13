import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './views/Home.jsx';
import Game from './views/Game.jsx';
// import Web from "./views/Web.jsx"

import About from './views/About.jsx';
import Contact from './views/Contact.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFoundComponent from './views/NotFoundPage.jsx';
import Footer  from './components/Footer.jsx';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<About />} />
          <Route path="/portfolio/games" element={<Game />} />
          {/* <Route path="/portfolio_github/webdesign" element={<Web/>}/> */}
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundComponent />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
