import React, { useEffect } from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { PrivateDashboard } from './PrivateDashboard'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicDashboard } from './PublicDashboard'
import { PublicRoutes } from './PublicRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { __authRenew } from '../actions/authActions'

import { WaitScreen } from '../components/ui/WaitScreen'

export const AppRouter = () => {

    const dispatch = useDispatch();

    const { checked } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch( __authRenew() )
    }, [])

    if( checked ){
        return <WaitScreen/>
    }

    return (
        <BrowserRouter>
        
            <Routes>
                <Route path="/auth/*" element={
                    <PublicRoutes >
                        <PublicDashboard/>
                    </PublicRoutes>
                }/>
                <Route path="/*" element={
                    <PrivateRoutes >
                        <PrivateDashboard/>
                    </PrivateRoutes>
                }/>
            </Routes>

        </BrowserRouter>
    )
}
