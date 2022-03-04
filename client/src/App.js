import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { userLogin } from './actions/userActions';
import Nav from './components/nav/Nav';

import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import RegisterComplete from './pages/auth/RegisterComplete';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLogin());
  }, [dispatch]);

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
