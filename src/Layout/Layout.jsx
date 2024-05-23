import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="font-Poppins">
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
