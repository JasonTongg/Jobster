import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Home from '../Pages/Home/Home';
import LoginRegis from '../Pages/LoginRegis/LoginRegis';
import PrivateRouter from './PrivateRoute';
import Stats from '../Components/Stats/Stats';
import Profile from '../Components/Profile/Profile';
import Jobs from '../Components/Jobs/Jobs';
import AddEditJob from '../Components/AddEditJob/AddEditJob';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginRegis />} />
        <Route
          path="/Dashboard"
          element={
            <PrivateRouter>
              <Dashboard />
            </PrivateRouter>
          }
        >
          <Route index element={<Stats />} />
          <Route path="profile" element={<Profile />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="add" element={<AddEditJob />} />
        </Route>
      </Routes>
      <ToastContainer position="top-center"></ToastContainer>
    </BrowserRouter>
  );
}
