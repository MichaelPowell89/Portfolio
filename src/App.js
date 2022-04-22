import './App.css';
import React from "react";
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./views/Home"
import Game from "./views/Game"
import Web from "./views/Web"
import About from './views/About';
import Contact from './views/Contact';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/gamedesign" element={<Game/>}/>
            <Route path="/webdesign" element={<Web/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
