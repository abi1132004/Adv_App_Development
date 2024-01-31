// App.jsx
//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './RegisterPage';
 import LoginPage from './LoginPage';
//import Navbar from './Navbar';
import Home from './Home';
const App = () => {
  return (
    
   
      <Router>
    
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
         <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
  
  );
};

export default App;
