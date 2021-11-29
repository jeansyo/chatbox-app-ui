import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { AppChat } from '../components/Chat/AppChat';

export const PrivateDashboard = () => {
    return (
        <Routes>
            <Route path="/" element={ <AppChat/> }/>
        </Routes>
    )
}
