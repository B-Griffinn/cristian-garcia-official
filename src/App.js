import React from 'react';
import './App.css';
import Navabar from "./componnets/NavBar/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './componnets/pages/Home';
import ContactPage from './componnets/pages/ContactPage';
import ServicesPage from './componnets/pages/ServicesPage';
import Testimonial from './componnets/testimonials/Testimonial';
import AboutPage from './componnets/pages/AboutPage';


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
        <Route path="/about"  component={AboutPage}/>
      </Switch>
      <Switch>
        <Route path="/services"  component={ServicesPage}/>
      </Switch>
      <Switch>
        <Route path="/testimonials"  component={Testimonial}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
