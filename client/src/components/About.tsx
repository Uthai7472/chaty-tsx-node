import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import useAuth from './AuthGuard';

const About = () => {

  const isAuthen = useAuth();

  if (!isAuthen) {
    return null;
  }

  return (
    <div>
      <Header topic={'About'} />
      <Navbar />
    </div>
  )
}

export default About