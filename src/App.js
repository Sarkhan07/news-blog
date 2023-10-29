// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Articles from './pages/Article';
import DetailsPage from './pages/DetailsPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:title" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
