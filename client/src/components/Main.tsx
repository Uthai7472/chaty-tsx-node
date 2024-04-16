import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Main = ({ isAuthenticated }) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  }

  return (
    <div>
        { !isAuthenticated ? (
          <h1>Failed</h1>
        ) : (
          <div>
            <h1>Main Page</h1>
            <Link to={'/about'}>go to About page</Link>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
        
    </div>
  )
}

export default Main