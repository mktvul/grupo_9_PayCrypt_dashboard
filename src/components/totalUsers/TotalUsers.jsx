import React from "react";
import "./totalUsers.css";

const TotalUsers = (props) => {
  return (
    <div className="totals-content-box">
      <div>Total de usuarios:</div>
      <div className="totals-amount">{props.value}</div>
    </div>
  );
};

export default TotalUsers;
