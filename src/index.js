import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Ajax from './Component/Ajax';
import TodoIndex from './Component/TodoIndex';
import Box from './Component/Box';
import Error from './Component/Error';
import {Switch,Route, Link, BrowserRouter as Router} from '../node_modules/react-router-dom';

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
      
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Ajax" component={Ajax} />
        <Route path="/TodoIndex" component={TodoIndex} />
        <Route path="/Box" component={Box} />
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
