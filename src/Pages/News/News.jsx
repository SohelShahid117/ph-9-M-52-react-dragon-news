import React from "react";
import Header from "./../Share/Header";
import BreakingNews from "../BreakingNews";
import RightSideNav from "./../Share/RightSideNav";
import { useParams } from "react-router-dom";
import Navbar from "../Share/Navbar";

const News = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>

      <div className="grid grid-cols-4">
        <div className="col-span-3 border">
          <h2>News Details</h2>
          <p>{id}</p>
        </div>

        <div className="col-span-1 border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
