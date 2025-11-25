import React from "react";
import { Outlet } from "react-router";
import Navbar from "../sharedComponents/Navbar";
import Footer from "../sharedComponents/Footer";

const RootLayouts = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayouts;
