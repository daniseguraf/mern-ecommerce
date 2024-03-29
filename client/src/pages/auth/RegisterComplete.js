import React, { useState, useEffect } from 'react';
import { auth } from './../../firebase';
import { toast } from 'react-toastify';

const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Email and password are required');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );

      if (result.user.emailVerified) {
        // remove user email from local storage
        window.localStorage.removeItem('emailForRegistration');

        // get user id token
        let user = auth.currentUser;
        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult();

        history.push('/');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const getEmail = window.localStorage.getItem('emailForRegistration');
    getEmail && setEmail(getEmail);
  }, []);

  const completeRegistrationForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="email" className="form-control" value={email} disabled />
      </div>

      <br />
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          autoFocus
        />
      </div>

      <br />
      <button type="submit" className="btn btn-raised">
        Complete Registration
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Complete your registration</h4>
          {completeRegistrationForm()}
          {email}
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;
