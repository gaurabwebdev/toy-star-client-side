import React from "react";
import { useLoaderData } from "react-router-dom";
import ToyCard from "../../Shared/ToyCard/ToyCard";

const SingleToys = () => {
  const toyDetails = useLoaderData();
  return (
    <div>
      <ToyCard toyDetails={toyDetails}></ToyCard>
    </div>
  );
};

export default SingleToys;
