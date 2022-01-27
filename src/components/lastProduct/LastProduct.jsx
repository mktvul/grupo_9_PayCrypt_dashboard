import React from "react";
import "./lastProduct.css"

const LastProduct = (props) => {
    return (
        <div className="latest-content-box">
            <div className="latest-title">Último producto:</div>
            <div>{props.name}</div>
            <div>{props.description}</div>
        </div>
    );
}

export default LastProduct;