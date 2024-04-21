import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthen, setIsAuthen] = useState(false);

  useEffect(() => {
    const isAuthenState = localStorage.getItem('isAuthenticated');
    if (isAuthenState === 'false' || isAuthenState === null) {
      window.location.href = '/';
    } else {
      setIsAuthen(true);
    }
  }, []);

  return isAuthen;
}

export default useAuth;