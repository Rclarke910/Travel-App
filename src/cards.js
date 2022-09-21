import React from "react";
function Cards(props){
    return (
        <div className = "card-data">
            <img src={props.item.img} className = "card-pics"></img>
            <h2>{props.item.location}</h2>
            <p>{props.item.link}</p>
            <h1>{props.item.title}</h1>
            <h3>{props.item.dates}</h3>
        </div>
    )
}

export default Cards