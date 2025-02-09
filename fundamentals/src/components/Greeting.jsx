import React from "react";

const Greeting = () => {
  const name = "Devu BHai";
  const date = new Date();
  return (
    <div>
      <h1>{name}</h1>
      <p>{date.getDate()}</p>
    </div>
  );
};

export default Greeting;
