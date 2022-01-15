import React from "react";
import "./totals.css";
import { TotalCategories, TotalProducts, TotalUsers } from "../../components";

const Totals = () => {
    return (
        <div>
            <TotalCategories />
            <TotalProducts />
            <TotalUsers />
        </div>
    );
}

export default Totals;