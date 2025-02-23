import React, { useState } from 'react'; 
import "./App.css";
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert';
import About from './components/About'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")

    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }
  

  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
      {/* < Navbar title = "TextUtlis" aboutTitle = "About TextUtlis"/> */}
      {/* < Navbar /> */}
      <Router>
      < Navbar title = "TextUtlis" mode = {mode} toggleMode = {toggleMode} />
      <Alert alert = {alert}/>
      <div className="container my-3">
        <Routes>
            <Route exact path="/about" element = {<About mode = {mode}/>} />
            <Route exact path="/" element = {<TextForm heading = "Enter a text to analyze below" mode ={mode}  showAlert={showAlert} />}/>
        </Routes>
        {/* <TextForm heading = "Enter a text to analyze below" mode ={mode}  showAlert={showAlert} btn = {btn}/> */}

        {/* If exact not used then home/about and home will be same and if about not found it will go to home */}
      </div>
      </Router>

    </>
  );
}

export default App;
