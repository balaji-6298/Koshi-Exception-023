import { Routes, Route } from "react-router-dom";
import Admin from "../admin/Admin";
import { SignUp } from "../login & singup/SignUp";
import { Login } from "../login & singup/Login";
import { Stays } from "../../pages/Stays";
import { Experiences } from "../../pages/Experiences";
import { OnlineExperiences } from "../../pages/OnlineExperiences";
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Stays />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/online-experiences" element={<OnlineExperiences />}/>
      </Routes>
    </>
  );
};
