import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoutes = ({ children }) => {

    const { user } = useSelector(state => state.auth)

    return  (!!user 
            ? children 
            : <Navigate to="/auth"/> )
}
