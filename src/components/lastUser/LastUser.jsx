import React from "react";
import "./lastUser.css";

const LastUser = (props) => {
    return (
        <div className="latest-content-box">
            <div className="latest-title">Último usuario:</div>
            <img className="latest-image" src={props.image} alt="user" />
            <div>{props.name}</div>
            <div>{props.email}</div>
        </div>
    );
}

export default LastUser;