import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import UserToyTable from "./UserToyTable/UserToyTable";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [userToys, setUserToys] = useState([]);
  useEffect(() => {
    const fetchMyToys = () => {
      fetch(
        `https://khelaghor-server-site.vercel.app/usertoys?email=${user.email}`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((data) => setUserToys(data));
    };
    fetchMyToys();
  }, []);
  console.log(userToys);
  return (
    <div>
      <PageTitle />
      <h1 className="text-5xl font-bold mb-10 text-center mt-10">My Toys</h1>
      <UserToyTable userToys={userToys}></UserToyTable>
    </div>
  );
};

export default MyToys;
