import React from 'react'
import { deleteToken } from '../api/localStorage';
import { useNavigate } from 'react-router-dom';


const Logout = () => {
  const navigate = useNavigate()
  
  const handleLogout = () => {
    deleteToken();
    navigate('/login')
  };

  return (
    <button
    type="button"
    onClick={() => { handleLogout() }}
  >
    Logout
  </button>  
  )
}

export default Logout;
