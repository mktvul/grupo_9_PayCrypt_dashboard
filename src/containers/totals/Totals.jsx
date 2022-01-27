import React, { useState, useEffect } from "react";
import "./totals.css";
import { TotalCategories, TotalProducts, TotalUsers } from "../../components";

const Totals = () => {
  const [products, setProducts] = useState(0);
  const [users, setUsers] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="totals-section">
      <TotalCategories value={products.totalCategories}/>
      <TotalProducts value={products.total} />
      <TotalUsers value={users.Count} />
    </div>
  );
};

export default Totals;
