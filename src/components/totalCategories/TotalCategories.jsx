import React from "react";
import "./totalCategories.css";

const TotalCategories = (props) => {
  return (
    <div className="totals-content-box">
      <div>Total de categorías:</div>
      <div className="totals-amount">{props.value}</div>
    </div>
  );
};

export default TotalCategories;
