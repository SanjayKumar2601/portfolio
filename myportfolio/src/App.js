import React from 'react';
import './App.css';
import Home from './components/Home'
import Navigation from './components/Navigation'
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <AboutMe />
      <Experience />
    </div>
  );
}

export default App;
