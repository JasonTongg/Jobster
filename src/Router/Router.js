import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Home from '../Pages/Home/Home';
import LoginRegis from '../Pages/LoginRegis/LoginRegis';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginRegis />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
      <ToastContainer></ToastContainer>
    </BrowserRouter>
  );
}
