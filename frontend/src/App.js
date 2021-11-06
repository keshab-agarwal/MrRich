import React from 'react';
import { Template } from './pages/Template.js';
import Home from './pages/Home.js';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Mono&display=swap');
      </style>
      <Router>
        <Routes>
          <Route path='/quote/:id' element={<Template/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
