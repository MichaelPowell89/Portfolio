import './App.css';
import React from "react";
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Home from "./views/Home"
import Game from "./views/Game"
import Web from "./views/Web"
import About from './views/About';
import Contact from './views/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/portfolio_github/" element={<Home/>}/>
            <Route path="/portfolio_github/gamedesign" element={<Game/>}/>
            <Route path="/portfolio_github/webdesign" element={<Web/>}/>
            <Route path="/portfolio_github/About" element={<About/>}/>
            <Route path="/portfolio_github/Contact" element={<Contact/>}/>
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
