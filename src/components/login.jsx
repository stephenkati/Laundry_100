import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logInUser } from '../redux/userReducer';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoading } = useSelector((state) => state.user);

  const loginDetails = { email, password };

  const handleLogin = async () => {
    try {
      await dispatch(logInUser(loginDetails));
      navigate('/');
      const form = document.getElementById('form');
      form.reset();
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form id="form">
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
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <button type="button" onClick={handleLogin} disabled={isLoading}>
            Login
          </button>
        )}
      </form>
      <h2>
        Don't have an account? <Link to="/register">Register</Link>
      </h2>
    </div>
  );
};

export default Login;
