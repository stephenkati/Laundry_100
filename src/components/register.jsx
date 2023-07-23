import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import { createUser } from '../redux/userReducer';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoading } = useSelector((state) => state.user);

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
    <div className="flex flex-col gap-4 bg-neutral p-4 text-primary rounded-lg shadow-lg">
      <h1 className="text-3xl text-secondary font-bold">Register</h1>

      <form id="form" className="flex flex-col gap-2 w-full">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          className="text-secondary-focus w-full py-2 px-4 rounded-full bg-accent border-none shadow-none outline-none focus:ring focus:ring-secondary placeholder-neutral-focus"
        />
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
            onClick={handleRegister}
            className="mt-4 w-full p-2 rounded-full bg-secondary text-primary font-bold hover:bg-accent-focus hover:text-secondary"
          >
            Register
          </button>
        )}
      </form>

      <h2 className="text-lg">
        Already have an account!
        <Link
          to="/login"
          className="text-secondary font-bold hover:text-primary px-2 underline decoration-white underline-offset-8"
        >Login</Link>
      </h2>
    </div>
  );
};

export default Register;
