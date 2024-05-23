import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React from "react";

import { createContext, useState } from "react";
import app from "./../Firebase/Firebase.config";
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    createUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

//52_5-3 (Recap) Create Auth Context And Integrate Register--9min
