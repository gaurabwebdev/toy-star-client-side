import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import UserToyTable from "./UserToyTable/UserToyTable";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [userToys, setUserToys] = useState([]);
  useEffect(() => {
    const fetchMyToys = () => {
      fetch(`http://localhost:5000/usertoys?email=${user.email}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setUserToys(data));
    };
    fetchMyToys();
  }, []);
  console.log(userToys);
  return (
    <div>
      <h1 className="text-5xl font-bold mb-10 text-center mt-10">My Toys</h1>
      <UserToyTable userToys={userToys}></UserToyTable>
    </div>
  );
};

export default MyToys;
