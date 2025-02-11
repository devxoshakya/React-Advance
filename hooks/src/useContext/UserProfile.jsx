import React, { useContext } from "react";
import { UserContext, UserProvider } from "./UserContext";

const UserProfile = () => {
  const name = useContext(UserContext);
  console.log(name);

  return (
      <div>
        my name is {name} and i am {90} years old
      </div>
  );
};

export default UserProfile;
