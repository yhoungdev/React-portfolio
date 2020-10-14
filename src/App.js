import React from 'react';
//import './App.css';
import '../src/main.css'
import Top from './components/top';
import Info from './components/qoute';
import About from './components/about';
import Project from './components/project';
import Foot from './components/footer';
function App() {
  return (
    
    <div className="App">
    
      <div  className="container-fluid">
    
        <Info></Info>
        <About></About>
        <Project></Project>
        <Foot></Foot>

      </div>
      

    </div>
  );
}

export default App;
