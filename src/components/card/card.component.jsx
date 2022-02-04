import React from "react";
import '../card/card.styles.css'

export const Card =(props)=>(
    <div className="card-container">
        
        <img alt="monsters" src={`https://robohash.org/${props.monster.id}?set=set2&size=182x180`} />
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>    
)