import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFoundComponent from './views/NotFoundPage.jsx';
import Footer  from './components/Footer.jsx';
import SinglePage from './views/SinglePage';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<SinglePage />} />
          <Route path="/portfolio" element={<SinglePage />} />
          <Route path="/*" element={<Navigate to="/portfolio/404"/>}/>
          <Route path="/portfolio/404" element={<NotFoundComponent />} />
          <Route path="/portfolio/*" element={<Navigate to="/portfolio/404"/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
