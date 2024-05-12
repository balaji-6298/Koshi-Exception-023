




import { BottomNavbar } from "./components/bottomNavbar/BottomNavbar"

import Admin from "./components/admin/Admin";



import {  Routes, Route } from "react-router-dom"; 
import { Stays } from "./pages/Stays";
import { Experiences } from "./pages/Experiences";
import { OnlineExperiences } from "./pages/OnlineExperiences";
import { TopNavbar } from "./components/topNavbar/TopNavbar";
import { AllRoutes } from "./components/allRoutes/AllRoutes";


const App = () => {
  return (
    <>


      <TopNavbar />

      

      <AllRoutes />

      <Routes>
        <Route path="/" element={<Stays />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/online-experiences" element={<OnlineExperiences />} />
      </Routes>
      <Admin />
      <BottomNavbar/>

    </>
    
  );
};
export default App;
