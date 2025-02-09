import React from 'react';
import './App.css';
import Home from './components/Home'
import Navigation from './components/Navigation'
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <AboutMe />
    </div>
  );
}

export default App;
