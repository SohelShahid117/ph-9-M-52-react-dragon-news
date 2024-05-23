import React from "react";
import logo from "../../assets/pic/logo.png";
import moment from "moment/moment";

//52-6 Homepage Layout And Date Time Formatting Using Moment.Js

const Header = () => {
  return (
    <div className="mx-auto w-3/4">
      {/* <h2>this is header</h2> */}
      <img className="mx-auto" src={logo} />
      <p>Journalism Without Fear or Favour</p>
      {/* <p className="text-xl">Sunday, November 27, 2022</p> */}
      <p className="text-xl">
        {moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}
      </p>
    </div>
  );
};

export default Header;
