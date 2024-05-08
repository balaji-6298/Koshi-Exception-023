
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Stays } from './pages/Stays';
import { Experiences } from './pages/Experiences';
import { OnlineExperiences } from './pages/OnlineExperiences';
import {TopNavbar} from './components/topNavbar/TopNavbar'


export const App: React.FC = () => {
    return (
        <Router>
            <TopNavbar />
            <Routes>
                <Route path="/" element={<Stays />} />
                <Route path="/experiences" element={<Experiences />} />
                <Route path="/online-experiences" element={<OnlineExperiences />} />
            </Routes>
        </Router>
    );
};
