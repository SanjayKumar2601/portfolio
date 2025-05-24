import React from 'react';
import './App.css';
import Home from './components/Home'
import Navigation from './components/Navigation'
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <AboutMe />
      <Experience />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
