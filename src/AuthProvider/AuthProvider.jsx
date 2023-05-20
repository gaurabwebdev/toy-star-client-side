import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [alltoys, setAllToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const authInfo = {
    alltoys,
    user,
    signup,
    login,
    logOut,
    auth,
  };
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      console.log(loggedUser);
    });
    return () => {
      unsuscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
