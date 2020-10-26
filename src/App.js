import React from 'react';
import './App.css';
import Navabar from "./componnets/NavBar/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './componnets/pages/Home';
import ContactPage from './componnets/pages/ContactPage';
// import Merch from './componnets/merch/Merch';
// import MerchPage from './componnets/pages/Merch';
import About from './componnets/pages/About';
import ServicesPage from './componnets/pages/ServicesPage';


function App() {
  return (
    <>
    <Router>
      <Navabar />

      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
      <Switch>
        <Route path="/contact"  component={ContactPage}/>
      </Switch>
      <Switch>
        <Route path="/about"  component={About}/>
      </Switch>
      <Switch>
        <Route path="/services"  component={ServicesPage}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;