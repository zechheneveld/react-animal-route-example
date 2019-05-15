import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Home from "./components/Home";
import Animals from './components/Animals';
import AnimalDetail from './components/AnimalDetail';
import Farms from './components/Farms';
import NotFound from './components/NotFound';

const App = () => (
<Router>
  <Header/>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/farms" component={Farms}/>
    <Route path="/animals" component={Animals}/>
    <Route path="/item/:id" component={AnimalDetail}/>


    <Route component={NotFound}/>

  </Switch>
</Router>
)

render(<App />, document.getElementById('root'));
