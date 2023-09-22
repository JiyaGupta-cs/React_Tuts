import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';


let name = "Jiya";

function App() {
  const [mode, setMode] = useState('light'); //Whether DarkMode is enabled or not
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextTrove" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm mode={mode} heading="Enter the text to analyze" />
        <About  mode={mode}/>
      </div>

    </>
  );
}

export default App;
