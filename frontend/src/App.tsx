import { BottomNavbar } from "./components/bottomNavbar/BottomNavbar";
import { TopNavbar } from "./components/topNavbar/TopNavbar";
import { AllRoutes } from "./components/allRoutes/AllRoutes";
import { FooterFirst } from "./pages/FooterFirst";
//import { Footer1 } from "./components/footer/Footer1";


const App = () => {
  return (
    <>
      <TopNavbar />
      <AllRoutes />
      <BottomNavbar />
      {/*  */}
      <FooterFirst />


      {/* <Stays/> */}
      {/* <Admin /> */}
      {/*<SignUp />
      
      <BottomNavbar /> */}

    </>
  );
};

export default App;
