import React, { useEffect, useState } from "react";
import UserToyTable from "../MyToys/UserToyTable/UserToyTable";

const AllToys = () => {
  const [usersToys, setUsersToys] = useState([]);
  useEffect(() => {
    const fetchUsersToys = () => {
      fetch("http://localhost:5000/usertoys")
        .then((res) => res.json())
        .then((data) => setUsersToys(data));
    };
    fetchUsersToys();
  }, []);
  console.log(usersToys);
  return (
    <div>
      <h1 className="text-5xl font-bold mb-10 text-center mt-10">
        All Added Toys
      </h1>
      <UserToyTable userToys={usersToys}></UserToyTable>
    </div>
  );
};

export default AllToys;
