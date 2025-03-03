
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddLocation from './pages/AddLocation';
import './App.css'


function App() {
  return (
    <Router> 
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-location" element={<AddLocation />}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
