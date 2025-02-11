import React, { createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const name = "devu bhai";
  const age = "bees saal";

  return <UserContext.Provider value={name}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
