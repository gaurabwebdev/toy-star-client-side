import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { photo_url, question, answer } = blog;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-[200px]" src={photo_url} alt="thumbnail" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{question}</h2>
        <p>{answer.slice(0, 80)}...</p>
        <div className="card-actions justify-end">
          <Link to={`/blogs/${blog._id}`}>
            <button className="btn btn-danger">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
