import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../redux/userReducer';

const Register = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector(state => state.user);
  

  useEffect( () => {
    dispatch(createUser(registrationDetails))
  }, [dispatch])

  return (
    <div>Register</div>
  )
};

export default Register;
