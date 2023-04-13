import React from 'react';
import { AuthContext } from '../Components/Context';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
function Protected({children}) {
    const {isloggedin}=useContext(AuthContext);

    if(isloggedin){
        return children;
    }
    else{
        return <Navigate to="/" />;
    }
}

export default Protected;