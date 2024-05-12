import { BottomNavbar } from "./components/bottomNavbar/BottomNavbar";
import { TopNavbar } from "./components/topNavbar/TopNavbar";
import { AllRoutes } from "./components/allRoutes/AllRoutes";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <>
      <TopNavbar />
      <AllRoutes />
      <BottomNavbar />
      <Footer />
    </>
  );
};

export default App;
