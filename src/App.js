import React from 'react'; 
import './App.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About'
import Skills from './components/skills/Skills';
import Qualification from './components/qualifikation/Qualification';
import Projects from './components/projects/Projects';



function App() {
  return (
    <div className='container'>
    
<Header />

<main className='main'>
  <Home/>
 
  
  <About/>
    
  <Projects/>
<Skills/>
<Qualification/>
</main>

  </div>
  );
}

export default App;
