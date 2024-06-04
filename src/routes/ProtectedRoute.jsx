// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './authUtils';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  return isAuthenticated() ? <Component {...rest} /> : <Navigate to="/" />;
};

export default ProtectedRoute;
