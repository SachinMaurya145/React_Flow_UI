import PropTypes from 'prop-types';
import React from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import Auth from '../utils/Auth';

const ProtectedRoute = ({children}) => {
  const auth = Auth.isAuth();
  const {pathname} = useLocation();
  if (pathname.includes('create-account')) {
    return children;
  } else {
    return auth ? <Navigate to='/reports' /> : children;
  }
};

ProtectedRoute.propTypes = {
  children: PropTypes.object,
};

export default ProtectedRoute;
