import { Routes, Route } from "react-router-dom";
import Admin from "../admin/Admin";
import { SignUp } from "../login & singup/SignUp";
import { Login } from "../login & singup/Login";
import { Stays } from "../../pages/Stays";
import { Experiences } from "../../pages/Experiences";
import { OnlineExperiences } from "../../pages/OnlineExperiences";
import { Popular } from "../../pages/Popular";
import { ArtsCulture } from "../../pages/ArtsCulture";
import Dashboard from "../admin/Dashboard";
import Properties from "../admin/Properties";
import Customers from "../admin/Customers";
import Transactions from "../admin/Transactions";
import { ChartBar } from "../admin/bar";
import Piee from "../admin/pie";
import Coupon from "../admin/Coupon";

export const AllRoutes = () => {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Stays />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/transaction" element={<Transactions />} />
        <Route path="/bar" element={<ChartBar />} />
        <Route path="/pie" element={<Piee />} />
        <Route path="/coupon" element={<Coupon />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/online-experiences" element={<OnlineExperiences />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/artsCulture" element={<ArtsCulture />} />
      </Routes>

      {/* {isAdminAuthenticated ? (
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Stays />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/online-experiences" element={<OnlineExperiences />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/artsCulture" element={<ArtsCulture />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/transaction" element={<Transactions />} />
          <Route path="/bar" element={<ChartBar />} />
          <Route path="/pie" element={<Piee />} />
          <Route path="/coupon" element={<Coupon />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      )} */}
    </>
  );
};
