import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import CarDetail from './components/CarDetail';
import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car/:name" element={<CarDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
