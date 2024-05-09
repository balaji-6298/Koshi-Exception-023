import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Use Routes and Route, not Router
import { Stays } from './pages/Stays';
import { Experiences } from './pages/Experiences';
import { OnlineExperiences } from './pages/OnlineExperiences';
import { TopNavbar } from './components/topNavbar/TopNavbar';

const App = () => {
  return (
    <>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Stays />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/online-experiences" element={<OnlineExperiences />} />
      </Routes>
    </>
  );
};

export default App;
