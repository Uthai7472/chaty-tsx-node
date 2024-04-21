import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = ({ topic }) => {

  const navigate = useNavigate();

    const handleLogout = () => {
        console.log("Logout");
        localStorage.removeItem('isAuthenticated');
        navigate('/');
    }

  return (
    <div className='header'>
      <div>
        <h1>OuMilin Family ({topic})</h1>
      </div>
      <div className='logout-block'>
        <button onClick={handleLogout} className='logout-btn'>Logout</button>
      </div>

    </div>
  )
}

export default Header