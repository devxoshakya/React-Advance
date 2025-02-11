import React, { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("Mounted!!");
  }, []);
  return <div>console something</div>;
};

export default BasicEffect;
