import React, { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);
return <div>Title of First Post is {data && data[0] && data[0].title}</div>;
};

export default FetchDataEffect;
