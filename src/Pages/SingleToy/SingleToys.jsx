import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleToys = ({ params }) => {
  const toyDetails = useLoaderData();
  console.log(toyDetails);
  return (
    <div>
      <p>SingleToys</p>
    </div>
  );
};

export default SingleToys;
