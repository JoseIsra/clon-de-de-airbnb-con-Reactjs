
import React from 'react'
import '../styles/Card.css';

function Card({src, title, info}) {
    return (
        <div className="card">
            <img 
                src={src} alt="imagething"
            />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{info}</h4>
            </div>

        </div>
    )
}
export default Card
