import React, { useState, useEffect } from 'react'
import LoadingtoRedirect from './LoadingToRedirect';

function ProtectAdmin({ children }) {
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
      /* check stor user && check user.token */
      setAdmin(true)
    }, []);
  
    return admin ? children : <LoadingtoRedirect />;
}

export default ProtectAdmin;