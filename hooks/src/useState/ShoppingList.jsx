import React, { useState } from "react";

const ShoppingList = () => {
  const [data, setData] = useState([]);
  const [quantity, setQuantity] = useState();
  const [name, setName] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, {
        name: name,
        quantity: quantity
    }])
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="quantity"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {data.map((data) => (
          <li>Nname: {data.name} | Quantity : {data.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
