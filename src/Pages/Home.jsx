import React from "react";
import Header from "./Share/Header";
import Navbar from "./Share/Navbar";
import LeftSideNav from "./Share/LeftSideNav";
import RightSideNav from "./Share/RightSideNav";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard/NewsCard";

const Home = () => {
  const news = useLoaderData();
  console.log(news);
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
          {news.map((aNews) => (
            <NewsCard news={aNews} key={aNews._id}></NewsCard>
          ))}
        </div>
        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
