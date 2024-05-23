import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div>
      <button className="btn btn-warning">Breaking news</button>
      <Marquee pauseOnHover={true} speed={500}>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default BreakingNews;
