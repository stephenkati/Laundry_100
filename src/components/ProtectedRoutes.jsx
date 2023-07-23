import React from 'react';
import { Navigate, useMatch } from 'react-router-dom';
import { getToken } from '../api/localStorage';
import PropTypes from 'prop-types';

const ProtectedRoutes = ({ children }) => {
  const token = getToken('token');

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

ProtectedRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoutes;
