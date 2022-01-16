import React from "react";
import "./latest.css";
import { LastProduct, LastUser } from "../../components"

const Latest = () => {
    return (
        <div className="latest-section">
            <LastProduct />
            <LastUser />
        </div>
    );
}

export default Latest;