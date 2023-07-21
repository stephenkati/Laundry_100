import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logInUser } from '../redux/userReducer';

const Login = () => {
  const dispatch = useDispatch()
  const { user, token } = useSelector((store) => store.user);
  console.log(user)
  console.log(token)

  const loginDetails = {
    email: 'test@gmail.com',
    password: 'test'
  };

  useEffect(() => {
    dispatch(logInUser(loginDetails))
  }, []);
  return (
    <button
      type="button"
      onClick={() => dispatch(logInUser(loginDetails))}
    >Login</button>
  )
};

export default Login;
