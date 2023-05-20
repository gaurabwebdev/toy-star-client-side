import React, { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [alltoys, setAllToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  const authInfo = {
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
