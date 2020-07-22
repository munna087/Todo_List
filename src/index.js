import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Ajax from './Ajax';
import TodoIndex from './TodoIndex';
import Box from './Box';
import {Route, Link, BrowserRouter as Router} from '../node_modules/react-router-dom';

import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';


const myRouter = (
  <Router>
    <div>
      <ul>
        <Link to="/">Home<br></br></Link>
        <Link to="/Ajax">Ajax<br></br></Link>
        <Link to="/TodoIndex">TodoList<br></br></Link>
        <Link to="/Box">Box<br></br></Link>
      </ul>
      
      <Route exact path="/" component={App} />
      <Route path="/Ajax" component={Ajax} />
      <Route path="/TodoIndex" component={TodoIndex} />
      <Route path="/Box" component={Box} />


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
