import React, { useState } from 'react';
import { auth } from './../../firebase';
import { toast } from 'react-toastify';

const Register = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      return;
    }

    const config = {
      url: process.env.REACT_APP_REGISTER_URL_REDIRECT,
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, config);
    toast.success(
      `Email is send to ${email}. Click the link to complete the registration.`
    );

    //save user email in the localstorage
    window.localStorage.setItem('emailForRegistration', email);
    setEmail('');
  };

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        autoFocus
      />

      <br />
      <button type="submit" className="btn btn-raised">
        Register
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          {registerForm()}
          {email}
        </div>
      </div>
    </div>
  );
};

export default Register;
