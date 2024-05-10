// import React from 'react';
import {  Routes, Route } from 'react-router-dom'; // Use Routes and Route, not Router
import { Stays } from './pages/Stays';
import { Experiences } from './pages/Experiences';
import { OnlineExperiences } from './pages/OnlineExperiences';
import { TopNavbar } from './components/topNavbar/TopNavbar';
// import Admin from './components/admin/Admin';
// import { Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <TopNavbar />
      {/* <Admin /> */}
      
      <Routes>
        <Route path="/" element={<Stays />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/online-experiences" element={<OnlineExperiences />} />
       
      </Routes>
    </>
  );
};


export default App;

