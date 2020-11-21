import React from 'react'
import '../styles/SearchResult.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';
function SearchResult({
    src,
    location,
    title,
    description,
    star,
    price
}) {
    return (
        <div className="searchResult">
            <img src={src} />
            <FavoriteBorderIcon className="heart-icon" />
            <div className="searchResult__info">
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>
                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon />
                        <p>
                            <stron>{star}</stron>
                        </p>
                    </div>
                    <p>
                        <strong>{price}</strong>
                        por noche
                    </p>
                </div>
            </div>
        </div>
    )
}


export default SearchResult;
