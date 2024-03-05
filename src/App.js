import React, { Component } from 'react';
import Acceuil from './Component/Acceuil';
import Dashboard from './Component/Dashboard';
import Annonce from './Component/Annonce';
import Contacte from './Component/Contacte';
import Message from './Component/Message';

import {
   BrowserRouter as Router,
   Route, 
   Routes
   } from 'react-router-dom';
import Home from './Component/Home';


   function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Annonce" element={<Annonce />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contacte" element={<Contacte />} />
          <Route path="/Message" element={<Message />} />

          </Routes>
      </Router>
    );
  }
  
  export default App;