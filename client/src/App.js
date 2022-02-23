import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

import Nav from './components/nav/Nav';

function App() {
  return (
    <main>
      <Nav />
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/" component={Home} exact />
      </Switch>
    </main>
  );
}

export default App;
