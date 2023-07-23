import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import { createUser } from '../redux/userReducer';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registrationDetails = { name, email, password };

  const handleRegister = async () => {
    try {
      await dispatch(createUser(registrationDetails));
      navigate('/');
      const form = document.getElementById('form');
      form.reset();
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h1>Register</h1>

      <form id="form">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>

      <h2>Already have an account! <Link to="/login">Login</Link></h2>
    </div>
  );
};

export default Register;
