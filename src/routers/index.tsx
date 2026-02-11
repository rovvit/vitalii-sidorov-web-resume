import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ContactPage from '../pages/ContactPage';
import HomePageNew from "../pages/HomePageNew";
import TimeLinePage from "../pages/TimeLine/TimeLinePage"
import ProjectsPage from "../pages/Projects/ProjectsPage";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {/*<Route path="/" element={<HomePage />} />*/}
            <Route path="/contacts" element={<ContactPage />} />
            <Route path="/" element={<HomePageNew />} />
            <Route path="/timeline" element={<TimeLinePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;