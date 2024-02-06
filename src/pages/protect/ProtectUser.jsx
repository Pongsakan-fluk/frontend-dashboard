import React from 'react'
import LoadingtoRedirect from './LoadingToRedirect';

function ProtectUser({ children }) {
    return user && user.user.token ? children : <LoadingtoRedirect />;
}

export default ProtectUser;