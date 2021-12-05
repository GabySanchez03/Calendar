import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter} from 'react-router-dom';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import Employee from './Pages/Employee';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import { Route} from 'react-router-dom';




function App() {
  return (
    <>
        <BrowserRouter> 
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" element={<Employee />} />
          <Route path='/Projects' component={<Projects/>} />
          <Route path='/Skills' component={<Skills/>} />
          </Switch>
      </Router>
      </BrowserRouter> 

    </>
  );
}
export default App;

