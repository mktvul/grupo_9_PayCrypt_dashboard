import React from "react";
import "./totalCategories.css";

fetch("http://localhost:3001/api/users")
    .then (response => response.json())
    .then (data => console.log(data));

const TotalCategories = () => {
    return (
        <div className="totals-content-box">
            <div>
                Total de categorías:
            </div>
            <div className="totals-amount">
                0
            </div>
        </div>
    );
}

export default TotalCategories;