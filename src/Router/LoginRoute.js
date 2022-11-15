import React from 'react';
import {GetLocalStorage} from '../Utils/LocalStorage';
import {Navigate} from 'react-router-dom';

export default function LoginRoute({children}) {
  let user = GetLocalStorage();
  if (!user) {
    return children;
  }
  return <Navigate to="/dashboard"></Navigate>;
}
