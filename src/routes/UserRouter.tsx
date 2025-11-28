import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingLayout from "../pages/nonauth/landing/LandingLayout";

function UserRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingLayout />}></Route>
      </Routes>
    </div>
  );
}

export default UserRouter;
