import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import LoginForm from '../pages/Login';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  // Check if the user is authenticated (e.g., if token exists)
  //const isAuthenticated = !!localStorage.getItem('token');
  const isAuthenticated = false;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <LoginForm />
      }
    />
  );
};

export default ProtectedRoute;
