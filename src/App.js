import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Agecls from './component/Agecls';
import Citycls from './component/Citycls';
import Dobcls from './component/Dobcls';
import Lifecycle from './component/Lifecycle';

function App() {
  return (
    <div className="App">
      <Agecls title='Age'></Agecls>
      <Citycls title='City'></Citycls>
      <Dobcls title='Date Of Birth'></Dobcls>
      <Lifecycle/>
    </div>
  );
}

export default App;
