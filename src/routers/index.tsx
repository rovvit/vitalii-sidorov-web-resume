import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import HomePageNew from "../pages/HomePageNew";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {/*<Route path="/" element={<HomePage />} />*/}
            <Route path="/contacts" element={<ContactPage />} />
            <Route path="/" element={<HomePageNew />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;