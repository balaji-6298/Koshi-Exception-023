import { BottomNavbar } from "./components/bottomNavbar/BottomNavbar";

import Admin from "./components/admin/Admin";

import { Routes, Route } from "react-router-dom";
import { Stays } from "./pages/Stays";
import { Experiences } from "./pages/Experiences";
import { OnlineExperiences } from "./pages/OnlineExperiences";
import { TopNavbar } from "./components/topNavbar/TopNavbar";
import { AllRoutes } from "./components/allRoutes/AllRoutes";
import { SignUp } from "./components/login & singup/SignUp";

import { Login } from "./components/login & singup/Login";
const App = () => {
  return (
    <>
      <AllRoutes />

     
      <BottomNavbar/>

      {/* <TopNavbar />
      <SignUp />
      <Admin />
      <BottomNavbar /> */}

    </>
  );
};

export default App;
