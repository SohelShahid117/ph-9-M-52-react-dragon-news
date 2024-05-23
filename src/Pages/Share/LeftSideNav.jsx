import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//52-9 Left Side Navigation And Module Summary

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      //   .then((data) => console.log(data));
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h2 className="text-xl">All Categories</h2>
      {categories.map((category) => (
        <Link
          key={category.id}
          className="block text-start font-bold"
          to={`${category.id}`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
