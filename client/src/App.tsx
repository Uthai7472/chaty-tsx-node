import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register';
import About from './components/About';
import Main from './components/Main';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  // localStorage.setItem('isAuthenticated', 'false');

  const isAuthenState = localStorage.getItem('isAuthenticated');
  const userLogin = localStorage.getItem('userLogin');

  console.log(localStorage.getItem('isAuthenticated'));

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/main' element={<Main />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App