import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      
      <Navbar />

      <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/about">
          <About/>
        </Route>

        <Route exact path="/contact">
          <Contact/>
        </Route>

    
    </Router>
  );
}

export default App;
