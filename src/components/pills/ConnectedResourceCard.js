import React from "react";

function ConnectedResourceCard(props) {
    return (
        <div className="connected-resource-card d-flex align-items-center justify-content-between">
            <span className="connected-resource-card-text">{props.resourceCardItems.name}</span>

            <img src={props.resourceCardItems.linkPath} alt=""/>
        </div>
    );
}

export default ConnectedResourceCard;
