import React from "react";
import "./totals.css";
import { TotalCategories, TotalProducts, TotalUsers } from "../../components";

const Totals = () => {
    return (
        <div className="totals-section">
            <TotalCategories />
            <TotalProducts />
            <TotalUsers />
        </div>
    );
}

export default Totals;