import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {
    const location = useLocation();
    const {user,loading} = useAuth();
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
     }
    if(user){
        return children;
    }
    return (
       <Navigate to="/auth/login" state={location?.pathname}/>
    );
};

export default ProtectedRoutes;