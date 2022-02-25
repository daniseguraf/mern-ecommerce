import React, { useState } from 'react';

const Register = () => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoFocus
      />

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
          {value}
        </div>
      </div>
    </div>
  );
};

export default Register;
