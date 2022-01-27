import React from "react";
import "./totalProducts.css";

const TotalProducts = (props) => {
  return (
    <div className="totals-content-box">
      <div>Total de productos:</div>
      <div className="totals-amount">{props.value}</div>
    </div>
  );
};

export default TotalProducts;
