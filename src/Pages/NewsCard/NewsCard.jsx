import React from "react";
import { Link } from "react-router-dom";
//52_5-5 Load News And Create News Detail Page

const NewsCard = ({ news }) => {
  //   console.log(news);
  const {
    author,
    details,
    title,
    image_url,
    rating,
    total_view,
    _id,
    thumbnail_url,
  } = news;
  return (
    <div className="card w-auto bg-base-100 shadow-xl mb-10 border-b-2 border">
      <figure>
        <img src={thumbnail_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {/* <p>{details}</p> */}
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}{" "}
            <Link to={`/news/${_id}`} className="text-blue-600 font-bold">
              Read more...
            </Link>{" "}
          </p>
        ) : (
          <p>{details}</p>
        )}
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
