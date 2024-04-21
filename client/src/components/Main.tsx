import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Main.css'
import Navbar from './Navbar';
import Header from './Header';
import AuthGuard from './AuthGuard';
import useAuth from './AuthGuard';
import ChatBar from './ChatBar';
import MyChatBlock from './MyChatBlock';
import YourChatBlock from './YourChatBlock';

const Main = () => {

  const isAuthen = useAuth();

  if (!isAuthen) {
    return null;
  }

  let userLogin = localStorage.getItem('userLogin');
  console.log(localStorage.getItem('userLogin'));

  return (
    <div className='main-body'>
      <Header topic={userLogin} />
      {/* <Navbar /> */}

      {/* <YourChatBlock /> */}
      <MyChatBlock />

      <ChatBar />
    </div>
  )
}

export default Main