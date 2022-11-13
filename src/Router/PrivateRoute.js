import React from 'react';
import {GetLocalStorage} from '../Utils/LocalStorage';
import {Navigate} from 'react-router-dom';

export default function PrivateRoute({children}) {
  let user = GetLocalStorage();
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
}
