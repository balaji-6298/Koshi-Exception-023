import { BottomNavbar } from "./components/bottomNavbar/BottomNavbar";
import { TopNavbar } from "./components/topNavbar/TopNavbar";
import { AllRoutes } from "./components/allRoutes/AllRoutes";
import { FooterFirst } from "./pages/FooterFirst";
import { useEffect, useState } from "react";
//import { Footer1 } from "./components/footer/Footer1";

const App = () => {
  const [check, setCheck]=useState(true);
  useEffect(() => {
   
    if (localStorage.getItem('admin')) {
      setCheck(false);
    }
  }, []);
  return (
    <>
      <TopNavbar />
      <AllRoutes />
     {check && <BottomNavbar />} 
      {check && <FooterFirst />}
    </>
  );
};

export default App;
