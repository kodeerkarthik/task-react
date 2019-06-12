import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Agecls from './task2/Agecls';
import Citycls from './task2/Citycls';
import Dobcls from './task2/Dobcls';
import Lifecycle from './task2/Lifecycle';
import Signin from './task1/Signin';
import Signup from './task1/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'component={Signin}></Route>
          <Route exact path='/signup'component={Signup}></Route>
          <Route exact path='/age'component={Agecls} title={'Age'}></Route>
          <Route exact path='/city'component={Citycls}></Route>
          <Route exact path='/dob'component={Dobcls}></Route>
          <Route exact path='/lcycle'component={Lifecycle}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
