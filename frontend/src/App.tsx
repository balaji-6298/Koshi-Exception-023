import { BottomNavbar } from "./components/bottomNavbar/BottomNavbar";

// import Admin from "./components/admin/Admin";

import { TopNavbar } from "./components/topNavbar/TopNavbar";
import { AllRoutes } from "./components/allRoutes/AllRoutes";


const App = () => {
  return (
    <>
    <TopNavbar />
      <AllRoutes />

     
      <BottomNavbar/>

       
       {/* <Stays/> */}
       {/* <Admin /> */}
      {/*<SignUp />
      
      <BottomNavbar /> */}

    </>
  );
};

export default App;
