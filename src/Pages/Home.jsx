import React from "react";
import Header from "./Share/Header";
import Navbar from "./Share/Navbar";
import LeftSideNav from "./Share/LeftSideNav";
import RightSideNav from "./Share/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      {/* <h2 className="text-3xl font-Poppins font-bold">This is home page</h2> */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="border">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="lg:col-span-2 border">
          <h2>New Coming Soon............</h2>
        </div>
        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
