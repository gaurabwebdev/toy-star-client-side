import React, { useEffect, useState } from "react";
import UserToyTable from "../MyToys/UserToyTable/UserToyTable";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const AllToys = () => {
  const [usersToys, setUsersToys] = useState([]);
  useEffect(() => {
    const fetchUsersToys = () => {
      fetch(`https://khelaghor-server-site.vercel.app/usertoys?limit=20`)
        .then((res) => res.json())
        .then((data) => setUsersToys(data));
    };
    fetchUsersToys();
  }, []);
  console.log(usersToys);
  return (
    <div>
      <PageTitle />
      <h1 className="text-5xl font-bold mb-10 text-center mt-10">
        All Added Toys
      </h1>
      <UserToyTable userToys={usersToys}></UserToyTable>
    </div>
  );
};

export default AllToys;
