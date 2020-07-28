import React from 'react';
import './App.css';
import Form from "./components/Form"
import Header from "./components/Header"
import { Route, Switch } from "react-router-dom";
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <div className="App"> 
    <Switch>
    <Route exact path="/" component={LoginForm} />
    <Route exact path="/register" component={RegistrationForm} />
    <Route component={Error} />
    </Switch>

    </div>
    // <div className="App">
    //  </div>
  );
}

export default App;
