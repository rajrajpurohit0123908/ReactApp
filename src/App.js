// src/App.js
import React from 'react';
import ListFetcher from './ListFetcher';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const App = () => {
  return (
    <Router>
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/updatestatus" element={<ListFetcher />} />
        </Routes>
    </div>
</Router>
  );
};

export default App;
