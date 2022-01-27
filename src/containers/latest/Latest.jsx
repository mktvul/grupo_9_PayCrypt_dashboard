import React, { useState, useEffect } from "react";
import "./latest.css";
import { LastProduct, LastUser } from "../../components";

const Latest = () => {
  const [products, setProducts] = useState(0);
  const [users, setUsers] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.data[data.data.length - 1]))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.data[data.data.length - 1]))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="latest-section">
      <LastProduct name={products.name} description={products.description} />
      <LastUser name={users.name} email={users.email} />
    </div>
  );
};

export default Latest;
