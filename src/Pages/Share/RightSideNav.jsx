import React from "react";
import { IoLogoGoogle } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

import qZone1 from "../../../PH-9-M-52/pic/qZone1.png";
import qZone2 from "../../../PH-9-M-52/pic/qZone2.png";
import qZone3 from "../../../PH-9-M-52/pic/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="space-y-5 mb-5">
        <h2 className="text-2xl">Login With</h2>
        <button className="btn btn-outline btn-accent">
          <IoLogoGoogle />
          Login With Google
        </button>
        <button className="btn btn-outline btn-primary">
          <FaGithub />
          Login With Github
        </button>
      </div>
      <div className="space-y-5 grid grid-cols-1 border rounded-t-lg ">
        <h2 className="text-2xl">Find Us On</h2>
        <button className="btn btn-outline btn-accent">
          <FaFacebook />
          Facebook
        </button>
        <button className="btn btn-outline btn-primary  border rounded-t-lg">
          <FaTwitter />
          Twiteer
        </button>
      </div>
      <div className="space-y-5 mb-5">
        <h2 className="text-2xl">Q Zone</h2>
        <img src={qZone1}></img>
        <img src={qZone2}></img>
        <img src={qZone3}></img>
      </div>
    </div>
  );
};

export default RightSideNav;
