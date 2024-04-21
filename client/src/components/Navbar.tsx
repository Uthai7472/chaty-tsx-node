import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("Logout");
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userLogin');
        navigate('/');
    }

  return (
    <div className='nav'>
            <><Link to='/main'>Main</Link></>
            <><Link to='/about'>About</Link></>
            <><button onClick={handleLogout}>Logout</button></>
    </div>
  )
}

export default Navbar