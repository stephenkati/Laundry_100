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
    <div className="flex flex-col gap-4 bg-neutral p-4 text-primary rounded-lg shadow-lg">
      <h1 className="text-3xl text-secondary font-bold">Login</h1>
      <form id="form" className="flex flex-col gap-2 w-full">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="text-secondary-focus w-full py-2 px-4 rounded-full bg-accent border-none shadow-none outline-none focus:ring focus:ring-secondary placeholder-neutral-focus"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="text-secondary-focus w-full py-2 px-4 rounded-full bg-accent border-none shadow-none outline-none focus:ring focus:ring-secondary placeholder-neutral-focus"
        />
        {isLoading ? (
          <p className="text-lg text-secondary">Loading...</p>
        ) : (
          <button
            type="button"
            onClick={handleLogin}
            disabled={isLoading}
            className="mt-4 w-full p-2 rounded-full bg-secondary text-primary font-bold hover:bg-accent-focus hover:text-secondary"
          >
            Login
          </button>
        )}
      </form>
      <h2 className="text-lg">
        Don't have an account?
        <Link to="/register"
          className="text-secondary font-bold hover:text-primary px-2 underline decoration-white underline-offset-8"
        >
          Register
        </Link>
      </h2>
    </div>
  );
};

export default Login;
