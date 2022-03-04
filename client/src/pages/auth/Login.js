import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { userSignIn } from './../../actions/userActions';
import { Button } from 'antd';
import { MailOutlined, GoogleOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';

const Login = ({ history }) => {
  const [email, setEmail] = useState('danielseguraf@gmail.com');
  const [password, setPassword] = useState('123456');

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(userSignIn(email, password));
    history.push('/');
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
  };

  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          autoFocus
        />
      </div>

      <br />

      <div className="form-group">
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>

      <br />
      <div className="form-group">
        <Button
          type="primary"
          className="mb-3"
          onClick={handleSubmit}
          block
          shape="round"
          icon={<MailOutlined />}
          size="large"
          disabled={!email || password.length < 6}
        >
          Login with Email/Password
        </Button>
      </div>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Login</h4>
          {loginForm()}

          <Button
            type="danger"
            className="mb-3"
            onClick={handleGoogleLogin}
            shape="round"
            icon={<GoogleOutlined />}
            size="large"
            block
          >
            Login with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
