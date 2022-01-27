import React, { useState, useEffect } from "react";
import "./totals.css";
import { TotalCategories, TotalProducts, TotalUsers } from "../../components";

const Totals = () => {
  const [products, setProducts] = useState(0);
  const [users, setUsers] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.total))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.Count))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="totals-section">
      <TotalCategories />
      <TotalProducts value={products} />
      <TotalUsers value={users} />
    </div>
  );
};

export default Totals;
