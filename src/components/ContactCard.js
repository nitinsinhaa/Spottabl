import React, { useState } from "react";
import "./ContactCard.css";

const contactCard = (props) => {

    return (
        <div className="card">
            <div className="card-desc">
                <img className="avatar" src="./avatar.jpg" alt="avatar" />
                <div className="card-desc-title">
                    <h2>{props.name}</h2>
                    <div>
                        <p>{props.designation}</p>
                    </div>
                </div>
                <img className="trash" src="./trash.jpg" alt="trash" onClick={props.handleDelete} />
            </div>
        </div>
    )
}

export default contactCard;