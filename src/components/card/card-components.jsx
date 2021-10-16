import React from "react";
import './card-style.css';
export const Card  = (props) =>(

    <div className="card-container">
        <img 
        alt="coder"
       src={'https://robohash.org/${props.coder.id}?set=set2&size=180x180'}/>
        <h1>{props.coder.name}</h1>
        <p>{props.coder.email}</p>
    </div>
)