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
  }, [userToys]);
  return (
    <div>
      <p>My Toys</p>

      <UserToyTable userToys={userToys}></UserToyTable>
    </div>
  );
};

export default MyToys;
