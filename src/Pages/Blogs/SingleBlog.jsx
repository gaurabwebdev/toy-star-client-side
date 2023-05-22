import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBlog = () => {
  const currentBlog = useLoaderData();
  const { question, answer, photo_url } = currentBlog;
  return (
    <div className="hero min-h-screen bg-base-200 px-8 py-5">
      <div className="hero-content flex-col lg:flex-row-reverse gap-3">
        <img
          src={photo_url}
          className="w-full lg:w-1/2 rounded-lg shadow-2xl"
        />
        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl font-bold">{question}</h1>
          <p className="py-6">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
