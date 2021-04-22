import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Service from './Service';
import Navbar from './Navbar'
import {Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/service' component={Service}/>
      </Switch>
    </>
  )
}
export default App;