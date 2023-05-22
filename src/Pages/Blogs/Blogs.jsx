import React from "react";
import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const blogs = useLoaderData();
  console.log(blogs);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-5">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-10">
        {blogs &&
          blogs.map((blog) => <BlogCard key={blog._id} blog={blog}></BlogCard>)}
      </div>
    </div>
  );
};

export default Blogs;
