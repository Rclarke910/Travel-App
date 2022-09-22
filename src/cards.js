import React from "react";
function Cards(props){
    return (
        <div className = "card-data">
            <img src={props.item.img} className = "card-pics"></img>
            <div className = "words">
            <h2 className = "location">{props.item.location}</h2>
            <p className = "link">{props.item.link}</p>
            <h1>{props.item.title}</h1>
            <h3>{props.item.dates}</h3>
            <p className = "info">{props.item.description}</p>
            </div>
        </div>
    )
}

export default Cards