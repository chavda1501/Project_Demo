import React from 'react';
import '../assets/style/App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/js/bootstrap.bundle';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import Service from '../Pages/Service';
import Navbar from '../Parts/Navbar'
import {Route, Switch} from 'react-router-dom';
import Footer from '../Parts/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/service' component={Service}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
      <Footer />
    </>
  )
}
export default App;