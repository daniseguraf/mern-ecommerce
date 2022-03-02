import React, { useState, useEffect } from 'react';
import { auth } from './../../firebase';
import { toast } from 'react-toastify';

const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getEmail = window.localStorage.getItem('emailForRegistration');
    getEmail && setEmail(getEmail);
  }, []);

  const completeRegistrationForm = () => (
    <form onSubmit={handleSubmit}>
      <input type="email" className="form-control" value={email} disabled />
      <input
        type="password"
        className="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        autoFocus
      />
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
          <h4>Register Complete</h4>
          {completeRegistrationForm()}
          {email}
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;
