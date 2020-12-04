import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import {Home, Browse, SignUp, SignIn, Browser} from './pages'



export default function App() {
  return (
    <Router>
    <Route exact path = '/user'>
      <p>Hello I am a user</p>
    </Route>
    <Route exact path = {ROUTES.HOME}>
      <Home />
    </Route>
    <Route exact path = "/browse">
      <Browser />
    </Route>
    <Route exact path = "/signin">
      <SignIn />
    </Route>
    <Route exact path = "/signup">
      <SignUp />
    </Route>
    </Router>
  );
};


