import { Routes, Route } from "react-router-dom";
import Admin from "../admin/Admin";
import { SignUp } from "../login & singup/SignUp";
import { Login } from "../login & singup/Login";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
