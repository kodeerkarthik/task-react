import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Agecls from './Task2/Agecls';
import Signup from './Task1/Signup';
import Arithmatic from './Task3/Arithmatic';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/task1' component={Signup}></Route>
          <Route exact path='/task2'component={Agecls}></Route>
          <Route exact path='/task3'component={Arithmatic}></Route>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
