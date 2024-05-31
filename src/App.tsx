import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Classes from './pages/classes';
import LearnMore from './pages/learn-more';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/classes" element={<Classes/>} />
        <Route path="/learn-more" element={<LearnMore/>} />
      </Routes>
    </Router>
  );
};

export default App;
