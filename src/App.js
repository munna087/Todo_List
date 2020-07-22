import React from 'react';
import logo from './logo.svg';

import './App.css';
import TodoIndex from './TodoIndex';
import Ajax from './Ajax';import 'bootstrap/dist/css/bootstrap.min.css';
import CardDesign from './CardDesign';




function App() {
  return (
    <div className="App">
      {/* <TodoIndex /> */}
      <Ajax />
      {/* <CardDesign /> */}
    </div>
  );
}

export default App;
