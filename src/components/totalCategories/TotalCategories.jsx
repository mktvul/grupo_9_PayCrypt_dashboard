import React, { useState, useEffect } from "react";
import "./totalCategories.css";

const [categoriesTotal, setCategoriesTotal] = useState(0);
const [productsTotal, setProductsTotal] = useState(0);
const [usersTotal, setUsersTotal] = useState(0);

useEffect(() => {
  fetch("http://localhost:3001/api/users")
    .then((response) => response.json())
    .then((dataUsers) => setUsersTotal());
});

fetch("http://localhost:3001/api/products")
  .then((response) => response.json())
  .then((dataProducts) => dataProducts);

const TotalCategories = () => {
  return (
    <div className="totals-content-box">
      <div>Total de categorías:</div>
      <div className="totals-amount">{/* {dataUsers.status} */}</div>
    </div>
  );
};

export default TotalCategories;
