import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import RegisterComplete from './pages/auth/RegisterComplete';

import Nav from './components/nav/Nav';

function App() {
  return (
    <main>
      <Nav />
      <ToastContainer />
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/register/complete" component={RegisterComplete} exact />

        <Route path="/" component={Home} exact />
      </Switch>
    </main>
  );
}

export default App;
