import React from 'react';
import Skills from './components/Skills';
import Home from './components/Home';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
     
      <div id="skills">
        <Skills />
      </div>
       
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default App;
