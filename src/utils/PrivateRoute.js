import PropTypes from 'prop-types';
import React from 'react';
import {Navigate} from 'react-router-dom';
import Auth from '../utils/Auth';

const PrivateRoute = ({children}) => {
  const auth = Auth.isAuth();
  return auth ? children : <Navigate to='/login' />;
};

PrivateRoute.propTypes = {
  children: PropTypes.object,
};

export default PrivateRoute;
