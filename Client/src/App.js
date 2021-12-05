import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Employee from './Pages/Employee';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Employee} />
          <Route path='/Projects' component={Projects} />
          <Route path='/Skills' component={Skills} />
          </Switch>
      </Router>
    </>
  );
}
export default App;

