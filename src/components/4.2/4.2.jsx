import React from "react";
import './style42.css'


function Card(props){
    return(
        <div className="container2">
            <img className="image" src={props.src} />
            <div className="title" >{props.title} </div>
            <p className="description">{props.description}</p>
            <a className="link" href={props.href}>{props.link}</a>
        </div>
    )
}
export default Card