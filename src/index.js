import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Ajax from './Component/Ajax';
import TodoIndex from './Component/TodoIndex';
import Box from './Component/Box';
import Error from './Component/Error';
import User from './Component/User';
import UserDetails from './Component/UserDetails'
import DesignCounter from './Component/DesignCounter'

import {Switch,Route, Link, BrowserRouter as Router} from '../node_modules/react-router-dom';

import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';


const myRouter = (
  <Router>
    <div>
      <ul>
        <Link to="/">Home<br></br></Link>
        <Link to="/ajax">Ajax<br></br></Link>
        <Link to="/todoIndex">TodoList<br></br></Link>
        <Link to="/box">Box<br></br></Link>
        <Link to="/user">User<br></br></Link>
        <Link to="/designCounter">DesignCounter<br></br></Link>
      </ul>
      
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/ajax" component={Ajax} />
        <Route path="/todoIndex" component={TodoIndex} />
        <Route path="/designCounter" component={DesignCounter} />
        <Route path="/box" component={Box} />
        <Route exact path="/user" component={User} />
        <Route path="/users/:username" component={UserDetails} />
        <Route component={Error} />
      </Switch>


    </div>
  </Router>
)

ReactDOM.render(myRouter, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
