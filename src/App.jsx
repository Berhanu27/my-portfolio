import React, { useState } from 'react';
import Styles from './App.module.css';
import{ Navbar} from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Experience from './components/Experience/Experience.jsx';
import Projects from './components/Projects/Projects.jsx';
import Contact from './components/Contact/Contact.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={Styles.App}>
      <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
    <Projects/>
    <Contact/>
    

    
      <div />
    </div>
  );
}

export default App;
