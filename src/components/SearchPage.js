import React from 'react'
import '../styles/SearchPage.css';
import {Button} from '@material-ui/core';
import SearchResult from './SearchResult';
import {places } from '../locations';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>Más de 300 alojamientos</p>
                <h1>Alojamientos cercanos</h1>
                <Button
                variant="outlined"
                >Flexibilidad de cancelación</Button>
                <Button variant="outlined">
                    Alojamiento entero
                </Button>
                <Button variant="outlined">
                Precio
                </Button>
                <Button variant="outlined">
                Reservación inmediata
                </Button>
                <Button variant="outlined">
                Más filtros•1
                </Button>
            </div>
            {places.map(place => {
                return <SearchResult 
                key ={place.id}   
                src ={place.src}
                location ={place.location}
                title ={place.title}
                description ={place.description}
                star ={place.star}
                price ={place.price}
                />
            })}
        </div>
    )
}
export default SearchPage

