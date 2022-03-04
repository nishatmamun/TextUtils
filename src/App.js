import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#152b6a';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
    <Router>
    <Navbar title="TextUtils" about="Contact Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
          </Route>
    </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;






      // setInterval(() => {
      //   document.title = 'TextUtils is amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils now.';
      // }, 1500);