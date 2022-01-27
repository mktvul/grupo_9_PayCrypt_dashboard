import React from "react";
import "./lastUser.css";

const LastUser = (props) => {
    return (
        <div className="latest-content-box">
            <div className="latest-title">Último usuario:</div>
            <div>{props.name}</div>
            <div>{props.email}</div>
        </div>
    );
}

export default LastUser;