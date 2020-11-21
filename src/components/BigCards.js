import React from 'react'
import '../styles/BigCards.css';


function BigCards({src , title}) {
    return (
        <div className="bigCards">
            <img src ={src} 
            alt="big picture"
            />
            <h3>{title}</h3>
        </div>
    )
}


export default BigCards
